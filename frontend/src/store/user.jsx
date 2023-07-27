import { create } from 'zustand';

const useUser = create((set) => ({
    data: [],
    registerRequest: async (register) => {
        console.log(register);
        try {
            const res = await fetch("http://localhost:8080/api/v1/auth/register", {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(register)
            });

            if (!res.ok) {
                throw new Error("not ok")
            }
            const data = await res.json();
            set({ data })
        } catch (error) {
            set({ data: [] })
        }
    },
    loginRequest: async (login) => {
        try {
            const res = await fetch("http://localhost:8080/api/v1/auth/login", {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(login)
            })
            if (!res.ok) {
                throw new Error("not ok")
            }
            const user = await res.json();
            set({user})
        } catch (error) {
            set({ user: "" })
        }
    }
}))

export default useUser