import fs from 'node:fs/promises'

class Filemanager {
    async writeFile(filename, data) {
        try {
            //convert data to JSON format
            data = JSON.stringify(data, null, 2)

            await fs.writeFile(filename, data)
        }
        catch (error) {
            console.log('write error => ', error)
        }

    }

    async readFile(fileName) {
        try {
            //read content in text format
            const fileContent = await fs.readFile(fileName, 'utf8')
            // convert content from text to data
            const fileData = JSON.parse(fileContent)
            return fileData
        }
        catch (error) {
            console.log('read error => ', error)
            return null
        }
    }
}

export const fileManager = new Filemanager();