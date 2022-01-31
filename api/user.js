import axios from 'axios';

export const UserAuth =()=>{
    const userInfo = ()=>{
        const result=axios
        .get("https://61e1443063f8fc0017618b0d.mockapi.io/nextjs")
        .then((res)=> {
            console.log(res);
            return res
        })
        .catch((err)=>{
            console.log(err);
            return err
        });
        return result;
    }

    return {userInfo};
}