function zenkaku2hankaku(this) {

        var str = this.value;
        var id = this.id;

        if (id == "TEL") {
            str = str.replaceAll("-", "");
            str = str.replaceAll("－", "");
            str = str.replaceAll("/", "");
            str = str.replaceAll("／", "");
            str = str.replaceAll(" ", "");
            str = str.replaceAll("　", "");
        } else if (id == "YUBIN") {
            str = str.replaceAll("-", "");
            str = str.replaceAll("－", "");
            str = str.replaceAll("/", "");
            str = str.replaceAll("／", "");
        } else if ("EMAIL") {
            str = str.replaceAll(" ", "");
            str = str.replaceAll("　", "");
        }else{
            str = str.replaceAll(" ", "");
            str = str.replaceAll("　", "");
        }
              var out = str.replace(/[Ａ-Ｚａ-ｚ０-９]/g, function (s) {
                return String.fromCharCode(s.charCodeAt(0) - 0xFEE0);
            });
            document.getElementById(id).value = out;
