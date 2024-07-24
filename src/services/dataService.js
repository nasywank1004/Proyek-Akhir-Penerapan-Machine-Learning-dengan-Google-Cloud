const { Firestore } = require('@google-cloud/firestore')
const path = require('path')

const keyFile = path.resolve('./key.json')

async function storeData(id, data) {
    const db = new Firestore({ projectId : 'submissionmlgc-nasywakamilia', keyFilename : keyFile})
    const predictCollection = db.collection('predictions')
    return predictCollection.doc(id).set(data)
}

async function getAllData() {
    const db = new Firestore({ projectId : 'submissionmlgc-nasywakamilia',  keyFilename : keyFile})
    const predictionCollection = db.collection('predictions')
    const predictionHistories = await predictionCollection.get()
    return predictionHistories.docs
}

module.exports = { storeData, getAllData }