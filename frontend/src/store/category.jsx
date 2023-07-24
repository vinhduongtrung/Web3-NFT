import {create} from 'zustand';
const useCategory = create((set) => ({
    data:[],
    fetchData : async () => {
        try{
            const token = "eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ2aW5oQGdtYWlsLmNvbSIsImlhdCI6MTY4OTk0OTU2MSwiZXhwIjoxNjkwMDM1OTYxfQ.yQ0FoxBZMaT2-92AFu3ZehsNWU-cLgwdtWOmjFEiO8Q";
            const res = await fetch("http://localhost:8080/api/v1/category/getAll", {
                method: 'GET',
                headers: {
                    'Authorization': `Bearer ${token}`,
                    'Content-Type': 'application/json'
                }
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