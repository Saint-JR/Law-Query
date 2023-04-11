interface LawListVO{
    national:Array<string>,
    local:Array<string>
}

const getLawList=():Promise<LawListVO>=>{
    return new Promise((resolve,reject):void=>{
        uni.request({
            url:'http://192.168.101.9:8080/getLawList',
            method:'GET',
            success:(res):void=>{
                resolve(res.data as LawListVO);
            },
            fail:(err):void=>{
                reject(err);
            }
        })
    })
    
}

const getLaw=(national:boolean,lawName:string):Promise<any>=>{
    return new Promise((resolve,reject):void=>{
        uni.downloadFile({
            url:encodeURI(`http://192.168.101.9:8080/getLaw?national=${national}&lawName=${lawName}`),
            success:(res):void=>{
                var filePath = res.tempFilePath;
                uni.openDocument({
                    filePath: filePath,
                    fileType:'doc',
                    success: function (res):void {
                        console.log('打开文档成功');
                        resolve(res);
                    },
                    fail:(err):void=>{
                        console.log(err)
                        reject(err);
                    }
                });
            },
            fail:(err):void=>{
                reject(err);
            }
        })
    })
}

const getCaseList=():Promise<Array<string>>=>{
    return new Promise((resolve,reject)=>{
        uni.request({
            url:'http://192.168.101.9:8080/getCaseList',
            method:'GET',
            success:(res):void=>{
                resolve(res.data as Array<string>);
            },
            fail:(err):void=>{
                reject(err);
            }
        })
    })
}

const getCase=(caseName:string):Promise<any>=>{
    return new Promise((resolve,reject)=>{
        uni.downloadFile({
            url:encodeURI(`http://192.168.101.9:8080/getCase?caseName=${caseName}`),
            success:(res):void=>{
                var filePath = res.tempFilePath;
                uni.openDocument({
                    filePath: filePath,
                    fileType:'doc',
                    success: function (res):void {
                        console.log('打开文档成功');
                        resolve(res);
                    },
                    fail:(err):void=>{
                        console.log(err)
                        reject(err);
                    }
                });
            },
            fail:(err):void=>{
                reject(err);
            }
        })
    })
}

export {getLawList,getLaw,getCaseList,getCase};

export type {LawListVO};