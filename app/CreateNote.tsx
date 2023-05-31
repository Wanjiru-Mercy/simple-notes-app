import { useState } from 'react';
import { useRouter } from 'next/navigation';

interface CreateNoteProps {
    setIsOpen: (value: boolean) => void;
    refreshNotes: (notes: any[]) => void;
    getNotes: () => Promise<any[]>;
}

export default function CreateNote({ setIsOpen, refreshNotes, getNotes }: CreateNoteProps) {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');

    const create = async (e: any) => {
        e.preventDefault();

        await fetch('http://127.0.0.1:8090/api/collections/notes/records', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                title,
                content,
            }),
        });

        setContent('');
        setTitle('');
        setIsOpen(false); 

        // Fetch notes again after creating a new note
        const newNotes = await getNotes();
        refreshNotes(newNotes);
    }

    const handleCancel = () => {
        setIsOpen(false); 
    };

    return (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center z-50">
            <div className="absolute w-full h-full bg-black opacity-50"></div>
            <form className="bg-white rounded-lg p-4 z-10" onSubmit={create}>
                <p className="font-mono text-text-color text-lg mb-4">New Note</p>
                <input
                    className="border border-gray-300 rounded p-2 w-full mb-4"
                    type="text"
                    placeholder="Title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
                <textarea
                    className="border border-gray-300 rounded p-2 w-full mb-4"
                    placeholder="Type away..."
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                />

                <div className="flex items-center justify-center">
                    <button className="flex-shrink-0 bg-accent-color hover:bg-hover-color text-sm text-white px-4 py-2 rounded" type="submit">
                        Save
                    </button>
                    <button className="flex-shrink-0 border-transparent text-accent-color hover:text-hover-color text-sm py-2 px-4 rounded " type="button">
                        Cancel
                    </button>
                </div>

            </form>
        </div>
    );
}
