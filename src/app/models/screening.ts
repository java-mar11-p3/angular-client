export class Screening {

    constructor (public id?: number, 
        public userId?: number,
        public candidateId?: number, 
        public screeningScore?: number, 
        public screeningNotes?: string)
        {}
}
