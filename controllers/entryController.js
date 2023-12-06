import Entry from "../models/Entry.js";

export async function getAllEntries() {
    return Entry.find();
}

export function getEntryById(id) {
    return Entry.findById(id);
}

export function getAllPersonalEntries() {
    return Entry.find({experience: "Experiencia personal"});
}

export function getAllGroupEntries() {
    return Entry.find({experience: "Experiencia grupal"});
}

export function addEntry(entry, images) {
    entry.images = images.map(image => {
        return {url: image.path, name: image.originalname}
    })

    return Entry.create(entry)
}

export function deleteEntry(id) {
    return Entry.findByIdAndDelete(id)
}

export function editEntry(id, entry) {
    return Entry.findByIdAndUpdate(id, entry)
}