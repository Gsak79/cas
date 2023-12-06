import Entry from "../models/Entry.js";
import {deleteImage} from "../cloudinary.js";

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
        return {url: image.path, name: image.originalname, publicId: image.filename}
    })

    return Entry.create(entry)
}

export async function deleteEntry(id) {
    const deletedEntry = await Entry.findByIdAndDelete(id)
    for (let i = 0; i < deletedEntry.images?.length; i++) {
        await deleteImage(deletedEntry.images[i].publicId)
    }
    return deletedEntry
}

export async function editEntry(id, entry, images) {
    const uploadedImages = JSON.parse(entry.uploadedImages)
    const uploadedImagesPublicIds = uploadedImages.map(image => image.publicId)

    images.forEach(image => {
        uploadedImages.push({url: image.path, name: image.originalname, publicId: image.filename})
    })

    entry.images = uploadedImages

    const beforeEntry = await Entry.findByIdAndUpdate(id, entry)

    const deletedImages = beforeEntry.images.filter(image => !uploadedImagesPublicIds.includes(image.publicId))

    for (let i = 0; i < deletedImages.length; i++) {
        await deleteImage(deletedImages[i].publicId)
    }

    return beforeEntry
}