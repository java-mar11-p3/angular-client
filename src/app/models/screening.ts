export class Screening {

    constructor (public id?: number, 
        public user_id?: number,
        public candidate_id?: number, 
        public screeningScore?: number, 
        public screeningNotes?: string)
        {}
}
