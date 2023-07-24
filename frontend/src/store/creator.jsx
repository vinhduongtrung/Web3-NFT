import {create} from 'zustand';

const useCreator = create((set) => ({
    data : [],
    fetchData: async () => {
        try{
            let limit;
            if (window.innerWidth >= 1200) {
            limit = 12;
            } else if (window.innerWidth >= 768) {
            limit = 6;
            } else {
            limit = 5;
            }
            const res = await fetch(`http://localhost:8080/api/v1/user/getTopUser/${limit}`, {
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
            console.log(error);
        }
    }
}))
export default useCreator;