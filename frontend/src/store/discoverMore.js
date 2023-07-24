import {create} from 'zustand';

const useNftItem = create((set) => ({
    data:[],
    fetchData : async (username, page) => {
        try{
            let limit;
            if (window.innerWidth >= 1200) {
            limit = 9;
            } else if (window.innerWidth >= 768) {
            limit = 6;
            } else {
            limit = 3;
            }
            const res = await fetch(`http://localhost:8080/api/v1/nft/findAllByUserName/${username}/${page}/${limit}`, {
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
            set({data})
        }catch(error) {
            set({data:[]})
        }
    }
}))
export default useNftItem;