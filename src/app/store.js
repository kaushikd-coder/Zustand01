import create from "zustand";
import { devtools, persist } from 'zustand/middleware';

const CreateStore = (set) => ({
    Persons:['Kaushik',"Rahul"],

    addPersons: (person) => {
        set((state) => ({
            Persons: [...state.Persons, person],
        }))
    },
    dark:false,
    toogleDarkMode: () => {
        set((state) => ({
            dark: !state.dark,
        }))
    }
})

const useStore = create(
    devtools(
        persist( CreateStore, {
            name:'person-store'
        })
    )
);

export default useStore;