import mongoose from 'mongoose';

export class DBConnection {
    private _dbUrl: string;
    private _dbPort: string;
    private _dbCredentials: string;
    private _dbReplicaString: string;
    private _dbConnectionString: string;

    constructor(dbName: string) {
        this._dbUrl = process.env.DB_URL || 'localhost';
        this._dbPort = process.env.DB_PORT || '27017';
        this._dbCredentials = (process.env.DB_USER && process.env.DB_PWD) ? `${process.env.DB_USER}:${process.env.DB_PWD}@` : '';
        this._dbReplicaString = (process.env.MONGODB_REPLICA_SET) ? `?replicaSet=${process.env.MONGODB_REPLICA_SET}` : '';
        this._dbConnectionString = `mongodb://${this._dbCredentials}${this._dbUrl}:${this._dbPort}/${dbName}${this._dbReplicaString}`;
        this.connectToDb();
    }

    private connectToDb() {
        mongoose.Promise = global.Promise;
        mongoose.connect(this._dbConnectionString, (error) => {
            if(error)
                console.error("Error in connecting to the DB", error);
        });
    }
}