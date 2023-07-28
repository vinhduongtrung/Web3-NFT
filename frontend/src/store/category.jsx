import {create} from 'zustand';

const domain1 = "http://18.140.101.238:8088";
const domain2 = "http://localhost:8080";
const useCategory = create((set) => ({
    data:[],
    fetchData : async () => {
        try{
            const res = await fetch(`${domain1}/api/v1/category/getAll`, {
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