import { join } from "path";
import { readdir, readFile, writeFileSync } from "fs"
import path from 'path';
import { fileURLToPath } from 'url';


const __filename = fileURLToPath(import.meta.url); // get the resolved path to the file
const __dirname = path.dirname(__filename); // get the name of the directory

const dirPath = join(__dirname, "../menuEntries");

let menuEntriesList = [];


const getMenuEntries = () => {
    readdir(dirPath, (err, files) => {
        if (err) {
            return console.log("Failed to list contents of directory: " + err)
        }
        let ilist = []
        files.forEach((file, i) => {
            let obj = {}
            let post
            readFile(`${dirPath}/${file}`, "utf8", (err, contents) => {
                const getMetadataIndices = (acc, elem, i) => {
                    if (/^---/.test(elem)) {
                        acc.push(i)
                    }
                    return acc
                }
                const parseMetadata = ({ lines, metadataIndices }) => {
                    if (metadataIndices.length > 0) {
                        let metadata = lines.slice(metadataIndices[0] + 1, metadataIndices[1])
                        metadata.forEach(line => {
                            obj[line.split(": ")[0]] = line.split(": ")[1]
                        })
                        return obj
                    }
                }
                const parseContent = ({ lines, metadataIndices }) => {
                    if (metadataIndices.length > 0) {
                        lines = lines.slice(metadataIndices[1] + 1, lines.length)
                    }
                    return lines.join("\n")
                }
                const lines = contents.split("\n")
                const metadataIndices = lines.reduce(getMetadataIndices, [])
                const metadata = parseMetadata({ lines, metadataIndices })
                const description = parseContent({lines, metadataIndices})
                post = {
                    itemName: metadata.itemName ? metadata.itemName : "No Item Name given",
                    thumbnail: metadata.thumbnail,
                    imageAlt: metadata.imageAlt,
                    price: metadata.price,                  
                    description: description ? description : "No description given",  
                    type: metadata.type,                  
                }
                menuEntriesList.push(post)
                ilist.push(i)
                if (ilist.length === files.length) {
                    const sortedList = menuEntriesList.sort((a, b) => {
                        return a.id < b.id ? 1 : -1
                    })
                    let data = JSON.stringify(sortedList)
                    writeFileSync("src/menuEntries.json", data)
                }
            })
        })
    })
    return
}

getMenuEntries();
