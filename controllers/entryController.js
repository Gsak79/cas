import Entry from "../models/Entry.js";

export async function getAllEntries() {
    return Entry.find();
}

export function getEntryById(id) {
    return Entry.findById(id);
}

export function addEntry(entry) {
    return Entry.create(entry)
}

export function deleteEntry(id) {
    return Entry.findByIdAndDelete(id)
}

export function editEntry(id, entry) {
    return Entry.findByIdAndUpdate(id, entry)
}