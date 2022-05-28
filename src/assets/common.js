
export default {
    install(Vue) {
        Vue.prototype.xx = function (x) {
            alert(x),
                console.dir(Vue);
        };
        Vue.prototype.music = async function (url, v = '') {
            try {
                const respons = await new Promise((resolve, reject) => {
                    const xhr = new XMLHttpRequest();
                    xhr.open('get', `https://netease-cloud-music-api-iota-seven.vercel.app${url}${v}`);
                    xhr.onload = () => resolve(xhr.responseText);
                    xhr.onerror = () => reject(xhr.statusText);
                    xhr.send();
                });
                return JSON.parse(respons);
            } catch (err) {
                return console.log(err);
            }
        }
    }
}