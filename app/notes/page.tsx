"use client"
import CreateNote from '../CreateNote';
import { BsPlusCircleFill } from 'react-icons/bs'
import { useState, useEffect } from 'react';

interface NoteType {
    id: number;
    title: string;
    content: string;
    created: string;
};

async function getNotes() {
    const res = await fetch('http://127.0.0.1:8090/api/collections/notes/records', { cache: 'no-store' });
    const data = await res.json();
    return data?.items as any[];
}

export default function NotesPage() {

    const [isOpen, setIsOpen] = useState(false);
    const [notes, setNotes] = useState<NoteType[]>([]);

    useEffect(() => {
        async function fetchNotes() {
            const fetchedNotes = await getNotes();
            setNotes(fetchedNotes);
        }

        fetchNotes();
    }, []);

    const colors = ["bg-pastel-red", "bg-pastel-orange", "bg-pastel-yellow", "bg-pastel-green", "bg-pastel-blue", "bg-pastel-indigo", "bg-pastel-violet"];

    return (
        <div className="bg-bg-2 min-h-screen">
            <div className="bg-bg-2 h-4"></div>
            <div className="sticky top-0 z-10 bg-gray-200 h-10 flex justify-between mx-4 rounded shadow-lg ">
                <h1 className="text-accent-color p-2 shadow-sm font-mono text-lg font-medium">My Notes</h1>
                <div className="flex items-center">
                    <img src="/sticky_note.svg" className="h-6 w-6" alt="Add Notes" />
                    <button
                        onClick={() => {
                            console.log("clicked")
                            setIsOpen(true)
                        }}
                        className="h-full relative flex items-center justify-center ml-2 p-2 overflow-hidden text-sm font-medium text-accent-color transition duration-300 ease-out rounded group"
                    >
                        <span className="absolute flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-accent-color group-hover:translate-x-0 ease">
                            <BsPlusCircleFill />
                        </span>
                        <span className="p-2 absolute flex items-center justify-center w-full h-full text-accent-color font-mono text-lg transition-all duration-300 transform group-hover:translate-x-full ease">
                            Create Note
                        </span>
                        <span className="p-2 relative font-mono text-lg invisible">Create Note</span>
                    </button>

                </div>
            </div>

            <div className='mt-2 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4 items-start '>

                {notes?.map((note, index) => {
                    const color = colors[index % colors.length];
                    return <Note key={note.id} note={note} className={color} />;
                })}
            </div>

            {isOpen && (
                <CreateNote setIsOpen={setIsOpen} refreshNotes={setNotes} getNotes={getNotes} />
            )}
        </div>

    );
}

function Note({ note, className }: any) {
    const { id, title, content, created } = note || {};

    // let date = new Date(created);
    // let day = String(date.getDate()).padStart(2, '0');
    // let month = String(date.getMonth() + 1).padStart(2, '0'); //January is 0!
    // let year = date.getFullYear();

    // let formattedDate = `${day}/${month}/${year}`;


    return (

        <div className={`block p-4 rounded shadow transition duration-200 ease-in-out hover:shadow-lg overflow-y-auto overflow-x-hidden whitespace-normal break-words ${className}`}>
            <h2 className="font-semibold text-md mb-2">{title}</h2>
            <p className="text-md mb-3">{content}</p>
            <p className="text-xs">{created}</p>
        </div>

    );
}
