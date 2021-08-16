export const parseTaskParameters = params => {
    let paramsArr = params.split('\n');
    let parsedParamsObj = {};
    
    paramsArr.forEach(paramPair => {
        const parsedPair = paramPair.split('=');

        parsedParamsObj[parsedPair[0]] = parsedPair[1];
    });

    return parsedParamsObj;
};