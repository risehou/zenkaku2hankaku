 //全角 → 半角（英数字）
function zenkaku2hankaku(id) {

        var str = document.getElementById(id).value;

        if (id == "TEL_1") {
            str = str.replaceAll("-", "");
            str = str.replaceAll("－", "");
            str = str.replaceAll("/", "");
            str = str.replaceAll("／", "");
            str = str.replaceAll(" ", "");
            str = str.replaceAll("　", "");
            var out = str.replace(/[Ａ-Ｚａ-ｚ０-９]/g, function (s) {
                return String.fromCharCode(s.charCodeAt(0) - 0xFEE0);
            });
            document.getElementById(id).value = out;
        } else if (id == "YUBIN") {
            str = str.replaceAll("-", "");
            str = str.replaceAll("－", "");
            str = str.replaceAll("/", "");
            str = str.replaceAll("／", "");
            if (str.length == 7) {　//ajaxzip3を対応するため
                var out = str.replace(/[Ａ-Ｚａ-ｚ０-９]/g, function (s) {
                    return String.fromCharCode(s.charCodeAt(0) - 0xFEE0);
                });
                document.getElementById(id).value = out;
            }
        } else if ("Email") {
            str = str.replaceAll(" ", "");
            str = str.replaceAll("　", "");
            var out = str.replace(/[Ａ-Ｚａ-ｚ０-９]/g, function (s) {
                return String.fromCharCode(s.charCodeAt(0) - 0xFEE0);
            });
            document.getElementById(id).value = out;

        }
