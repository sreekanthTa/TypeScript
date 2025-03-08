// What is an intersection type ?
//Combine two types

type FileData = {
    path: string
}

type Status = {
    isOpen:boolean
    errorMessage?: string
}

type AccessFileData =  FileData & Status

// Note: We can do above one using interfaces with extends