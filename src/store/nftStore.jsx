import create from 'zustand';

const useNftItem = create((set) => ({
    res:[],
    fetchData : async (username) => {
        try{
            const token = "eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ2aW5oQGdtYWlsLmNvbSIsImlhdCI6MTY4OTkyMTYzOCwiZXhwIjoxNjkwMDA4MDM4fQ.-4Ty8yjzJYHHZp-wvHAqC4KCTPv-3SiyBJZb08MQH6k";
            const res = await fetch(`http://localhost:8080/api/v1/nft/findAllByUserName/${username}`, {
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
export default useNftItem;