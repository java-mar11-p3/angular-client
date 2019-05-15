export class Screening {

    constructor (public id?: number, 
        public userId?: number,
        public candidate_id?: number, 
        public screeningScore?: number, 
        public screeningNotes?: string)
        {}
}
