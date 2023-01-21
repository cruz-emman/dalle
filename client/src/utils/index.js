import {surpriseMePrompts} from '../constants'
import FileSaver from 'file-saver'
export function getRandomPrompt (propmt){
    const randomIndex = Math.floor(Math.random() * surpriseMePrompts.length)
 
    const randomPrompt = surpriseMePrompts[randomIndex]

    if(randomPrompt === propmt ) return getRandomPropmpt(prompt) 

    return randomPrompt
}

export async function downloadImage(_id, photo){
    FileSaver.saveAs(photo, `dowload-${_id}.jpg`)
}