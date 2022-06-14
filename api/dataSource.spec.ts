import { initDataSource, dataSource, closeDataSource } from './src/dataSource';

beforeAll(async ()=>{
    await initDataSource();
});

beforeEach(async () => {
    //await connection.clear();
});

it('creates a user', () => {
    // TODO
});
