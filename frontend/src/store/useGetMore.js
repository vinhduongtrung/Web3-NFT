import {create} from 'zustand';

const domain1 = "https://danielaws.tk/group8";
const domain2 = "http://localhost:8080";

const useGetMore = create((set) => ({
    data:[],
    fetchData : async () => {
        try{
            let limit;
            if (window.innerWidth >= 1200) {
            limit = 3;
            } else if (window.innerWidth >= 768) {
            limit = 2;
            } else {
            limit = 3;
            }
            const res = await fetch(`${domain1}/api/v1/nft/getMoreNft/${limit}`, {
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
export default useGetMore;