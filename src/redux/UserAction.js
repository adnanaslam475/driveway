export const ISAUTH = 'ISAUTH';

export const auth = () => {
    console.log('auth actio')
    return {
        type: ISAUTH,
        value:true
    };
}