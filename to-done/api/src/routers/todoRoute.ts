import { Router } from '../../deps.ts';

const router = new Router();

router.get('/', (ctx) => {
    console.log('get');
    ctx.response.body = 'get';
});

router.post('/', (ctx) => {
    console.log('post');
    ctx.response.body = 'post';
});

router.delete('/', (ctx) => {
    console.log('delete');
    ctx.response.body = 'delete';
});

router.put('/', (ctx) => {
    console.log('put');
    ctx.response.body = 'put';
});

export default router;