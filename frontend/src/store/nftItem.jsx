import {create} from 'zustand';

const useNftItem = create((set) => ({
    res:[],
    fetchData : async (username) => {
        try{
            const res = await fetch(`http://localhost:8080/api/v1/nft/findAllByUserName/${username}`, {
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
export default useNftItem;