import { create } from "zustand";
import { devtools } from "zustand/middleware"

export const chatStore = create(
    devtools(
        ((set)=>({
            chats: [],
            setChats: (message)=>set((state)=>({
                chats: [...state.chats, message]
            }))
        }))
    )
);