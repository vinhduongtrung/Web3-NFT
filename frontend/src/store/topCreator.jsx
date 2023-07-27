import {create} from 'zustand';

const useTopCreator = create((set) => ({
    data : [],
    fetchData: async (page, limit) => {
        try{
            const res = await fetch(`http://localhost:8080/api/v1/user/getTopUser/${page}/${limit}`, {
                method: 'GET',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
            });

            if(!res.ok) {
                throw new Error("res not ok")
            }
            const newData = await res.json();
           console.log(newData);
            set((prev) => ({
                data: [...prev.data, ...newData]
            }));
        }catch(error) {
            console.log(error);
        }
    }
}))
export default useTopCreator;