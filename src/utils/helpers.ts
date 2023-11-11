import { Alert, Platform, ToastAndroid } from "react-native";

const randomNumber = (number: number, id: string) => {
  return Math.ceil(Number(id) % number);
};


const alert=(text:string,duration:number=800)=>{
  Platform.OS==="android"? ToastAndroid.show(text,duration) : Alert.alert(text)
}

const sleep=(delay:number)=>new Promise(res=>setTimeout(res, delay))

const DIFFICULTIES = ['Easy', 'Medium', 'Hard'];

const getStat = (text: string, range: number, id: string) => {
  let statText = !text
    ? DIFFICULTIES[randomNumber(range, id)]
    : randomNumber(range, id) + '\n' + text;
  return statText;
};

export {getStat,alert,sleep};
