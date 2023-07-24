import {create} from 'zustand';
const useCategory = create((set) => ({
    data:[],
    fetchData : async () => {
        try{
            const res = await fetch("http://localhost:8080/api/v1/category/getAll", {
                method: 'GET',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
            });

            if(!res.ok) {
                throw new Error("res not ok")
            }
            const data = await res.json();
            console.log(data);
            set({data})
        }catch(error) {
            set({data:[]})
        }
    }
}))

export default useCategory