
        var krlyklsylr = ['1', '1', '1', '1', '1', '1', '1', '2', '2', '2', '2', '3', '3', '3', '3', '3', '4', '4', '4', '4', '4', '5', '5', '5', 'K'];
        var oynhk = ['1', '1', '1', '2', '2', '3', '3', '4', '5', 'K', 'X'];
        var oynhksys = 0;
        var futuristcecho = [];
        var futuristcechoo = [];
        var futuristcechooo = [];
        var renkverilcek = false;
        var renkver;
        var renkverildi = true;
        var intdegskn;
        var intsayisi = 0;
        var intaclnsy;
        var intaclnsysy = 0;
        var inthcrsrsonc = 0;
        var buhucre = 0;
        var oynpuan = 0;
        var tamekran = false;
        var besvar = false;
        var kartisil = false;
        var koseoynpuan = [];
        var kosepuansay = [];
        var kralkartoynsylrdz = [];
        var krlkrtsylrsysy = [];
        var kralkartoynsayilar = '1234K';
        var oynpencere;
        var oynpencerend;
        var tambrws = false;

        function openFullscreen() {
            if (tamekran == false) {
                tamekran = true;
                var oyncnvs = document.getElementById('pencere');
                oynpencere = oyncnvs.offsetTop;
                if (oyncnvs.requestFullscreen) {
                    oyncnvs.requestFullscreen();
                } else if (oyncnvs.mozRequestFullScreen) { /* Firefox */
                    oyncnvs.mozRequestFullScreen();
                } else if (oyncnvs.webkitRequestFullscreen) { /* Chrome, Safari & Opera */
                    oyncnvs.webkitRequestFullscreen();
                } else if (oyncnvs.msRequestFullscreen) { /* IE/Edge */
                    oyncnvs.msRequestFullscreen();
                }
            }
            else {
                tamekran = false;
                window.scrollTo(0, oynpencere);
                if (document.exitFullscreen) {
                    document.exitFullscreen();
                } else if (document.mozCancelFullScreen) { /* Firefox */
                    document.mozCancelFullScreen();
                } else if (document.webkitExitFullscreen) { /* Chrome, Safari and Opera */
                    document.webkitExitFullscreen();
                } else if (document.msExitFullscreen) { /* IE/Edge */
                    document.msExitFullscreen();
                }
            }
        }

        function opentambrws() {
            var oyncnvs = document.getElementById('pencere');
            oynpencere = oyncnvs.offsetTop;
            if (tambrws == false) {
                tambrws = true;
                oyncnvs.style.width = '100%';
                oyncnvs.style.height = '100%';
                window.scrollTo(0, oynpencere);
            }
            else {
                tambrws = false;
                oyncnvs.style.width = '500px';
                oyncnvs.style.height = '500px';
                window.scrollTo(0, oynpencere);
            }
            yenidenboyutla();
        }

        function shuffle(array) {
            var currentIndex = array.length, temporaryValue, randomIndex;
            while (0 !== currentIndex) {
                randomIndex = Math.floor(Math.random() * currentIndex);
                currentIndex -= 1;
                temporaryValue = array[currentIndex];
                array[currentIndex] = array[randomIndex];
                array[randomIndex] = temporaryValue;
            }
            return array;
        }
        function dizikaydet(dizicgln, dizikpya) {
            for (var dzsys = 0; dzsys < dizicgln.length; dzsys++) {
                dizikpya[dzsys] = dizicgln[dzsys];
            }
        }

        function oyundizisisifirla() {
            var olusturulcakdiziuzunluk = 25;
            for (var kkoos = 0; kkoos < olusturulcakdiziuzunluk; kkoos++) //diziye uzunluk verildi
            {
                kralkartoynsylrdz[kkoos] = 0;
            }
            for (var ks = 0; ks < olusturulcakdiziuzunluk; ks++) {
                if (futuristcecho[ks] == '5') {
                    kralkartoynsylrdz[ks] = futuristcecho[ks];
                }
            }
        }

        function kkoyndzolstr(buhucre) {
            var kkssssuz = 6;
            var kkoyndzIndx = kralkartoynsayilar.length, rastgeleIndx;
            var rastgeleSayi = Math.floor(Math.random() * kralkartoynsayilar.length);
            rastgeleIndx = kralkartoynsayilar.charAt(rastgeleSayi);
            for (var kkkds = 0; kkkds < 6; kkkds++) {
                krlkrtsylrsysy[kkkds] = 0;
            }
            if (kralkartoynsylrdz[buhucre] == 0) {
                kralkartoynsylrdz[buhucre] = rastgeleIndx;
                futuristcecho[buhucre] = rastgeleIndx;
            }
            for (var kkooss = 0; kkooss < kralkartoynsylrdz.length; kkooss++) //rastgele index yazılmadan once dizideki sayıların kontrolü
            {
                if (kralkartoynsylrdz[kkooss] == '1') {
                    krlkrtsylrsysy[0]++;
                    if (krlkrtsylrsysy[0] == 7 && rastgeleIndx == '1') //kontrol dizisindeki değer eşitlenmiş ve yine aynı sayı rastgele gelmişse tekrar rastgele sayı alınacak
                    {
                        kralkartoynsylrdz[buhucre] = rastgeleIndx;
                        kralkartoynsayilar = kralkartoynsayilar.replace('1', '');
                    }
                }
                if (kralkartoynsylrdz[kkooss] == '2') {
                    krlkrtsylrsysy[1]++;
                    if (krlkrtsylrsysy[1] == 4 && rastgeleIndx == '2') {
                        kralkartoynsylrdz[buhucre] = rastgeleIndx;
                        kralkartoynsayilar = kralkartoynsayilar.replace('2', '');
                    }
                }
                if (kralkartoynsylrdz[kkooss] == '3') {
                    krlkrtsylrsysy[2]++;
                    if (krlkrtsylrsysy[2] == 5 && rastgeleIndx == '3') {
                        kralkartoynsylrdz[buhucre] = rastgeleIndx;
                        kralkartoynsayilar = kralkartoynsayilar.replace('3', '');
                    }
                }
                if (kralkartoynsylrdz[kkooss] == '4') {
                    krlkrtsylrsysy[3]++;
                    if (krlkrtsylrsysy[3] == 5 && rastgeleIndx == '4') {
                        kralkartoynsylrdz[buhucre] = rastgeleIndx;
                        kralkartoynsayilar = kralkartoynsayilar.replace('4', '');
                    }
                }
                if (kralkartoynsylrdz[kkooss] == 'K') {
                    krlkrtsylrsysy[5] += 1;
                    if (krlkrtsylrsysy[5] == 1 && rastgeleIndx == 'K') {
                        kralkartoynsylrdz[buhucre] = rastgeleIndx;
                        kralkartoynsayilar = kralkartoynsayilar.replace('K', '');
                    }
                }
            }
        }


        window.onload = function () { yenioyun(); tabloyuolusturnd(); yenioyund(); }
        function yenioyun() {
            var krlyklsylryndzi = [];
            krlyklsylryndzi = shuffle(krlyklsylr);
            dizikaydet(krlyklsylryndzi, futuristcechoo);
            dizikaydet(krlyklsylryndzi, futuristcecho);
            dizikaydet(oynhk, futuristcechooo);
            tabloyuolustur(futuristcecho);
            clearInterval(intaclnsy);
            clearInterval(intdegskn);
            intsayisi = 0;
            intaclnsysy = 0;
            inthcrsrs = 0;
            oynhksys = 0;
            buhucre = 0;
            inthcrsrsonc = 0;
            renkverildi = true;
            oynpuan = 0;
            besvar = false;
            renkverilcek = false;
            kartisil = false;
            kralkartoynsayilar = '1234K';
            oyundizisisifirla();
            for (var i = 0; i < 25; i++) {
                kosepuansay[i] = 0;
            }
            for (var j = 0; j < 24; j++) {
                koseoynpuan[j] = true;
            }
            document.getElementById('bronzodl').style.visibility = 'hidden';
            document.getElementById('gumusodl').style.visibility = 'hidden';
            document.getElementById('altinodl').style.visibility = 'hidden';
            Cbg();
        }

        function uckereterar() {
            if (intsayisi < 6) {
                var besdurumu = document.getElementById('besalarm');
                if (besdurumu.style.visibility == 'hidden') {
                    besdurumu.style.visibility = 'visible';
                    intsayisi++;
                }
                else {
                    besdurumu.style.visibility = 'hidden';
                    intsayisi++;
                }
            }
            else {
                intsayisi = 0;
                clearInterval(intdegskn);
            }
        }
        function besalarm() {
            clearInterval(intdegskn);
            if (oynhksys < 9) {
                intdegskn = setInterval(uckereterar, 300);
            }
        }

        function aclnsykck() {
            var aclnhucre = document.getElementsByClassName('kutular')[inthcrsrsonc];
            if (intaclnsysy != 6 && oynhksys < oynhk.length) {
                if (aclnhucre.innerHTML == '') {
                    aclnhucre.innerHTML = futuristcecho[inthcrsrsonc];
                    intaclnsysy++;
                }
                else {
                    aclnhucre.innerHTML = '';
                    intaclnsysy++;
                }
            }
            else {
                intaclnsysy = 0;
                clearInterval(intaclnsy);
            }
            Cbg();
        }

        function dizikntrl(gelenid) //////////////////////////////////////////////////////
        {
            renkverilcek = false;
            if (oynhksys <= oynhk.length - 1) {
                clearInterval(intaclnsy); intaclnsysy = 0;
                clearInterval(intdegskn); intsayisi = 0;
                var silkutu = document.getElementsByClassName('kutular')[inthcrsrsonc];
                if (kartisil == true) {
                    silkutu.innerHTML = '';
                    silkutu.style.backgroundColor = '#214D40';
                }
            }
            document.getElementById('besalarm').style.visibility = 'hidden';
            if (oynhksys == 9) {
                if (futuristcecho[inthcrsrsonc] == 'K' && kartisil == true) {
                    document.getElementsByClassName('kutular')[inthcrsrsonc].innerHTML = '';
                    Cbg();
                }
            }
            var sira = gelenid.slice(7);
            buhucre = parseInt(sira);
            var yazlckkare = document.getElementsByClassName('kutular')[buhucre];
            kkoyndzolstr(buhucre);
            if (oynhksys < oynhk.length - 1 && yazlckkare.innerHTML == '') {
                besvar = false;
                if (buhucre % 5 == 0) {
                    if (futuristcecho[buhucre + 1] == '5' || futuristcecho[buhucre + 5] == '5' || futuristcecho[buhucre + 6] == '5' || futuristcecho[buhucre - 4] == '5' || futuristcecho[buhucre - 5] == '5') {
                        besalarm();
                        if (oynhksys == 8) {
                            besvar = true;
                        }
                    }
                }
                else if (buhucre % 5 == 1 || buhucre % 5 == 2 || buhucre % 5 == 3) {
                    if (futuristcecho[buhucre + 1] == '5' || futuristcecho[buhucre + 4] == '5' || futuristcecho[buhucre + 5] == '5' || futuristcecho[buhucre + 6] == '5' ||
                        futuristcecho[buhucre - 1] == '5' || futuristcecho[buhucre - 4] == '5' || futuristcecho[buhucre - 5] == '5' || futuristcecho[buhucre - 6] == '5') {
                        besalarm();
                        if (oynhksys == 8) {
                            besvar = true;
                        }
                    }
                }
                else if (buhucre % 5 == 4) {
                    if (futuristcecho[buhucre + 4] == '5' || futuristcecho[buhucre + 5] == '5' || futuristcecho[buhucre - 1] == '5' || futuristcecho[buhucre - 5] == '5' || futuristcecho[buhucre - 6] == '5') {
                        besalarm();
                        if (oynhksys == 8) {
                            besvar = true;
                        }
                    }
                }

                function bulnnkryz() {
                    document.getElementById('bulunans').innerHTML = futuristcecho[buhucre];
                    document.getElementById('aranans').innerHTML = oynhk[oynhksys];
                }

                function bulnnsayicikar() {
                    for (var ydkkntrl = 0; ydkkntrl < futuristcechoo.length; ydkkntrl++) {
                        if (futuristcechoo[ydkkntrl] == futuristcecho[buhucre]) {
                            futuristcechoo[ydkkntrl] = '';
                            break;
                        }
                    }
                }

                function oyunpuanyaz() {
                    var oyunpuan = document.getElementById('oyunpuan');
                    oyunpuan.innerHTML = oynpuan;
                }
                kartisil = false;
                if (parseInt(futuristcecho[buhucre]) < parseInt(oynhk[oynhksys])) {
                    if (oynhk[oynhksys] != '5') {
                        bulnnkryz();
                        yazlckkare.innerHTML = futuristcecho[buhucre];
                        kosepuansay[buhucre] = 1;
                        kosepuanhsp();
                        bulnnsayicikar();
                        oynpuan += parseInt(futuristcecho[buhucre]) * 10;
                        oyunpuanyaz();
                    }
                    else {
                        if (besvar == false) {
                            renkverilcek = true;
                            bulnnkryz();
                            yazlckkare.innerHTML = futuristcecho[buhucre];
                            kosepuansay[buhucre] = 1;
                            kosepuanhsp();
                            bulnnsayicikar();
                            oynpuan += parseInt(futuristcecho[buhucre]) * 10;
                            oyunpuanyaz();
                        }
                        else {
                            kartisil = true;
                            futuristcechooo[oynhksys] = '';
                            if (oynhksys < oynhk.length - 1)
                                oynhksys++;
                            bulnnkryz();
                            inthcrsrsonc = buhucre;
                            clearInterval(intaclnsy);
                            intaclnsy = setInterval(aclnsykck, 300);
                        }
                    }
                }
                else {
                    if (futuristcecho[buhucre] == oynhk[oynhksys]) {
                        if (futuristcecho[buhucre] != 'K') {
                            if (oynhk[oynhksys] != '5') {
                                oynpuan += parseInt(futuristcecho[buhucre]) * 10; oyunpuanyaz();
                                kosepuansay[buhucre] = 1;
                                kosepuanhsp();
                                oyunpuanyaz();
                                yazlckkare.innerHTML = futuristcecho[buhucre];
                                renkverilcek = true;
                                bulnnsayicikar();
                            }
                            else {
                                if (besvar == false) {
                                    oynpuan += parseInt(futuristcecho[buhucre]) * 10;
                                    kosepuansay[buhucre] = 1;
                                    kosepuanhsp();
                                    oyunpuanyaz();
                                    yazlckkare.innerHTML = futuristcecho[buhucre];

                                    renkverilcek = true;
                                    bulnnsayicikar();
                                }
                                else {
                                    kartisil = true;
                                    inthcrsrsonc = buhucre;
                                    clearInterval(intaclnsy);
                                    intaclnsy = setInterval(aclnsykck, 300);
                                }
                            }
                            futuristcechooo[oynhksys] = '';
                            if (oynhksys < oynhk.length - 1)
                                oynhksys++;
                            bulnnkryz();
                        }
                        else {
                            renkverilcek = true;
                            oynpuan += 100;
                            kosepuansay[buhucre] = 1;
                            kosepuanhsp();
                            oyunpuanyaz();
                            futuristcechooo[oynhksys] = '';
                            if (oynhksys < oynhk.length - 1)
                                oynhksys++;
                            bulnnkryz();
                        }
                    }
                    else {
                        kartisil = true;
                        inthcrsrsonc = buhucre;
                        clearInterval(intaclnsy);
                        intaclnsy = setInterval(aclnsykck, 300);
                        futuristcechooo[oynhksys] = '';
                        if (oynhksys < oynhk.length - 1)
                            oynhksys++;
                        bulnnkryz();
                    }
                }
            }
            if (oynhksys == oynhk.length - 1) {
                for (var tabdoldur = 0; tabdoldur < document.getElementsByClassName('kutular').length; tabdoldur++) {
                    if (document.getElementsByClassName('kutular')[tabdoldur].innerHTML == '') {
                        var tablohucresi = document.getElementsByClassName('kutular')[tabdoldur];
                        kkoyndzolstr(tabdoldur);
                        tablohucresi.innerHTML = futuristcecho[tabdoldur];
                    }
                }
                if (oynpuan > 0 && oynpuan < 400)
                    document.getElementById('bronzodl').style.visibility = 'visible';
                else if (oynpuan > 400 && oynpuan < 500)
                    document.getElementById('gumusodl').style.visibility = 'visible';
                else if (oynpuan > 500)
                    document.getElementById('altinodl').style.visibility = 'visible';
            }
            if (oynhksys <= oynhk.length - 1)
                Cbg();
            guncellekartsayisi();
            function koseonkntrl(hcr1, hcr2, hcr3, hcr4, hcr5, hcrl) {
                if (kosepuansay[hcr1] == '1' && kosepuansay[hcr2] == '1' && kosepuansay[hcr3] == '1' && kosepuansay[hcr4] == '1' && kosepuansay[hcr5] == '1') {
                    koseoynpuan[hcrl] = false;
                    document.getElementsByClassName('kutular')[hcr1].style.borderColor = 'white';
                    document.getElementsByClassName('kutular')[hcr2].style.borderColor = 'white';
                    document.getElementsByClassName('kutular')[hcr3].style.borderColor = 'white';
                    document.getElementsByClassName('kutular')[hcr4].style.borderColor = 'white';
                    document.getElementsByClassName('kutular')[hcr5].style.borderColor = 'white';
                    kosepuanhsp();
                }
            }

            function kosepuanhsp() {
                if (koseoynpuan[0] == false && koseoynpuan[12] == true) {
                    oynpuan += 10;
                    koseoynpuan[12] = false;
                }
                else {
                    if (koseoynpuan[0] == true)
                        koseonkntrl(0, 1, 2, 3, 4, 0);
                }
                if (koseoynpuan[1] == false && koseoynpuan[13] == true) {
                    oynpuan += 10;
                    koseoynpuan[13] = false;
                }
                else {
                    if (koseoynpuan[1] == true)
                        koseonkntrl(5, 6, 7, 8, 9, 1);
                }
                if (koseoynpuan[2] == false && koseoynpuan[14] == true) {
                    oynpuan += 10;
                    koseoynpuan[14] = false;
                }
                else {
                    if (koseoynpuan[2] == true)
                        koseonkntrl(10, 11, 12, 13, 14, 2);
                }
                if (koseoynpuan[3] == false && koseoynpuan[15] == true) {
                    oynpuan += 10;
                    koseoynpuan[15] = false;
                }
                else {
                    if (koseoynpuan[3] == true)
                        koseonkntrl(15, 16, 17, 18, 19, 3);
                }
                if (koseoynpuan[4] == false && koseoynpuan[16] == true) {
                    oynpuan += 10;
                    koseoynpuan[16] = false;
                }
                else {
                    if (koseoynpuan[4] == true)
                        koseonkntrl(20, 21, 22, 23, 24, 4);
                }
                if (koseoynpuan[5] == false && koseoynpuan[17] == true) {
                    oynpuan += 10;
                    koseoynpuan[17] = false;
                }
                else {
                    if (koseoynpuan[5] == true)
                        koseonkntrl(0, 5, 10, 15, 20, 5);
                }
                if (koseoynpuan[6] == false && koseoynpuan[18] == true) {
                    oynpuan += 10;
                    koseoynpuan[18] = false;
                }
                else {
                    if (koseoynpuan[6] == true)
                        koseonkntrl(1, 6, 11, 16, 21, 6);
                }
                if (koseoynpuan[7] == false && koseoynpuan[19] == true) {
                    oynpuan += 10;
                    koseoynpuan[19] = false;
                }
                else {
                    if (koseoynpuan[7] == true)
                        koseonkntrl(2, 7, 12, 17, 22, 7);
                }
                if (koseoynpuan[8] == false && koseoynpuan[20] == true) {
                    oynpuan += 10;
                    koseoynpuan[20] = false;
                }
                else {
                    if (koseoynpuan[8] == true)
                        koseonkntrl(3, 8, 13, 18, 23, 8);
                }
                if (koseoynpuan[9] == false && koseoynpuan[21] == true) {
                    oynpuan += 10;
                    koseoynpuan[21] = false;
                }
                else {
                    if (koseoynpuan[9] == true)
                        koseonkntrl(4, 9, 14, 19, 24, 9);
                }
                if (koseoynpuan[10] == false && koseoynpuan[22] == true) {
                    oynpuan += 10;
                    koseoynpuan[22] = false;
                }
                else {
                    if (koseoynpuan[10] == true)
                        koseonkntrl(0, 6, 12, 18, 24, 10);
                }
                if (koseoynpuan[11] == false && koseoynpuan[23] == true) {
                    oynpuan += 10;
                    koseoynpuan[23] = false;
                }
                else {
                    if (koseoynpuan[11] == true)
                        koseonkntrl(4, 8, 12, 16, 20, 11);
                }
            }
        }

        function guncellekartsayisi() {
            var birsayisi = 0;
            var ikisayisi = 0;
            var ucsayisi = 0;
            var dortsayisi = 0;
            var bessayisi = 0;
            var ksayisi = 0;

            for (var i = 0; i < futuristcechoo.length; i++) {
                if (futuristcechoo[i] == '1') birsayisi++;
                else if (futuristcechoo[i] == '2') ikisayisi++;
                else if (futuristcechoo[i] == '3') ucsayisi++;
                else if (futuristcechoo[i] == '4') dortsayisi++;
                else if (futuristcechoo[i] == '5') bessayisi++;
            }

            birsayisi = 0; ikisayisi = 0; ucsayisi = 0; dortsayisi = 0; bessayisi = 0; ksayisi = 0;

            for (var l = 0; l < futuristcechooo.length; l++) {
                if (futuristcechooo[l] == '1') birsayisi++;
                else if (futuristcechooo[l] == '2') ikisayisi++;
                else if (futuristcechooo[l] == '3') ucsayisi++;
                else if (futuristcechooo[l] == '4') dortsayisi++;
                else if (futuristcechooo[l] == '5') bessayisi++;
                else if (futuristcechooo[l] == 'K') ksayisi++;
            }
        }


        function tabloyuolustur() {
            var sayilartablosu = document.getElementById('sayitablosu');
            var satirhucresayisi = 0;
            var style = window.getComputedStyle(document.getElementById('pencere'));
            var yeniboyut = 0;
            if (parseInt(style.height) > parseInt(style.width))
                yeniboyut = parseInt(style.width);
            else if (parseInt(style.height) < parseInt(style.width))
                yeniboyut = parseInt(style.height);
            else
                yeniboyut = parseInt(style.height);
            for (var i = 0; i < 7; i++) {
                if (sayilartablosu.rows[i] != null) {
                    sayilartablosu.deleteRow(i);
                }

                var tablosatiri = sayilartablosu.insertRow(i);

                for (var j = 0; j < 7; j++) {
                    var tablohucresi = tablosatiri.insertCell(j);
                    if (j > 0 && i < 6 && j < 6 && i > 0) {
                        tablohucresi.setAttribute('id', 'idstrhc' + satirhucresayisi);
                        tablohucresi.onclick = function () { dizikntrl(this.id) };
                        satirhucresayisi++;
                        tablohucresi.style.cursor = 'pointer';
                    }

                    if (i != 0 && j != 0 && i != 6 && j != 6)
                        tablohucresi.setAttribute('class', 'kutular');
                    else
                        tablohucresi.setAttribute('class', 'yankutular');

                    tablohucresi.setAttribute('width', yeniboyut / 10);
                    tablohucresi.setAttribute('height', yeniboyut / 10);
                    tablohucresi.style.fontSize = yeniboyut / 17;
                    tablohucresi.style.fontWeight = '1000';

                    if (i == 0) {
                        if (j == 1) {
                            tablohucresi.style.border = 'none';
                            var odldivbrz = document.createElement("DIV");
                            odldivbrz.setAttribute('width', yeniboyut / 11);
                            odldivbrz.setAttribute('height', yeniboyut / 11);
                            odldivbrz.setAttribute('id', 'bronzodl');
                            var odldivbrzimg = document.createElement("IMG");
                            odldivbrzimg.setAttribute('id', 'bronzodlimg');
                            odldivbrzimg.src = 'https://web.archive.org/web/20210319180032/https://lh3.googleusercontent.com/-hJf9naEsO28/XKpEIGCsC2I/AAAAAAAAAmg/V0fcW20bzQAop2WmmVBngQxIaL56uEvyQCEwYBhgL/w140-h140-p/brnz.png';
                            odldivbrzimg.width = yeniboyut / 12;
                            odldivbrzimg.height = yeniboyut / 12;
                            odldivbrz.appendChild(odldivbrzimg);
                            tablohucresi.appendChild(odldivbrz);
                            tablohucresi.style.visibility = 'hidden';
                        }
                        if (j == 2) {
                            tablohucresi.style.border = 'none';
                            var odldivgm = document.createElement("DIV");
                            odldivgm.setAttribute('width', yeniboyut / 11);
                            odldivgm.setAttribute('height', yeniboyut / 11);
                            odldivgm.setAttribute('id', 'gumusodl');
                            var odldivgmimg = document.createElement("IMG");
                            odldivgmimg.setAttribute('id', 'gumusodlimg');
                            odldivgmimg.src = 'https://web.archive.org/web/20210319180032/https://lh3.googleusercontent.com/-isjL5qnBiEA/XKpEItoK8-I/AAAAAAAAAmk/6tZYy7w7hxUFuQKJvNw4fmhx6e2Ify7kwCEwYBhgL/w140-h140-p/gms.png';
                            odldivgmimg.width = yeniboyut / 12;
                            odldivgmimg.height = yeniboyut / 12;
                            odldivgm.appendChild(odldivgmimg);
                            tablohucresi.appendChild(odldivgm);
                            tablohucresi.style.visibility = 'hidden';
                        }
                        if (j == 3) {
                            tablohucresi.style.border = 'none';
                            var odldivatn = document.createElement("DIV");
                            odldivatn.setAttribute('width', yeniboyut / 11);
                            odldivatn.setAttribute('height', yeniboyut / 11);
                            odldivatn.setAttribute('id', 'altinodl');
                            var odldivatnimg = document.createElement("IMG");
                            odldivatnimg.setAttribute('id', 'altinodlimg');
                            odldivatnimg.src = 'https://web.archive.org/web/20210319180032/https://lh3.googleusercontent.com/-H_Z9QEbDHbI/XKpEIIQLz6I/AAAAAAAAAmc/df20Rn3zeDM4P4m77CyzsJ2lth-RJmsAgCEwYBhgL/w140-h140-p/altn.png';
                            odldivatnimg.width = yeniboyut / 12;
                            odldivatnimg.height = yeniboyut / 12;
                            odldivatn.appendChild(odldivatnimg);
                            tablohucresi.appendChild(odldivatn);
                            tablohucresi.style.visibility = 'hidden';
                        }
                    }
                    if (i == 0 && j == 4) {
                        tablohucresi.setAttribute('id', 'oyunpuan');
                        tablohucresi.style.fontSize = yeniboyut / 15;
                        tablohucresi.style.fontWeight = '2000';
                        tablohucresi.style.color = 'white';
                        tablohucresi.style.border = 'none';
                    }
                    if (i == 6 && j == 0) {
                        tablohucresi.style.fontSize = yeniboyut / 50;
                        tablohucresi.style.fontWeight = '1000';
                        tablohucresi.innerHTML = 'ELDEKİ KARTLAR';
                        tablohucresi.style.border = 'none';
                    }
                    if (i == 4 && j == 6) {
                        tablohucresi.setAttribute('id', 'bulunans');
                        tablohucresi.style.border = '2px inset red';
                    }
                    if (i == 2 && j == 6) {
                        tablohucresi.setAttribute('id', 'aranans');
                        tablohucresi.innerHTML = '1';
                        tablohucresi.style.border = '2px inset red';
                    }

                    if (i == 6 || j == 0) {
                        tablohucresi.style.border = 'none';
                        var kartsayisi = document.createElement("DIV");
                        var kartsayisic = document.createElement("DIV");
                        kartsayisi.setAttribute('width', yeniboyut / 14);
                        kartsayisi.setAttribute('height', yeniboyut / 14);
                        kartsayisi.style.fontSize = yeniboyut / 21;
                        kartsayisi.setAttribute('class', 'kartsayisi');
                        kartsayisic.setAttribute('width', yeniboyut / 40);
                        kartsayisic.setAttribute('height', yeniboyut / 40);
                        kartsayisic.style.fontSize = yeniboyut / 43;
                        kartsayisic.style.color = 'white';
                        kartsayisic.setAttribute('class', 'kartsayisic');
                        if (i == 1 || j == 1) {
                            kartsayisi.innerHTML = '1';
                            kartsayisi.style.backgroundColor = '#63A228';
                        }
                        else if (i == 2 || j == 2) {
                            kartsayisi.innerHTML = '2';
                            kartsayisi.style.backgroundColor = '#C98731';
                        }
                        else if (i == 3 || j == 3) {
                            kartsayisi.innerHTML = '3';
                            kartsayisi.style.backgroundColor = '#E3C528';
                        }
                        else if (i == 4 || j == 4) {
                            kartsayisi.innerHTML = '4';
                            kartsayisi.style.backgroundColor = '#B82BB7';
                        }
                        else if (i == 5 || j == 5) {
                            kartsayisi.innerHTML = '5';
                            kartsayisi.style.backgroundColor = '#1369E2';
                        }
                        else if (j == 6) {
                            kartsayisi.innerHTML = 'K';
                            kartsayisi.style.backgroundColor = '#a40000';
                        }
                        if (i == 1 || i == 2 || i == 3 || i == 4 || i == 5) {
                            tablohucresi.setAttribute('id', 'eldekis');
                            kartsayisi.setAttribute('id', 'eldiv');
                            kartsayisic.setAttribute('id', 'eldivic');
                            tablohucresi.appendChild(kartsayisi);
                            kartsayisi.appendChild(kartsayisic);
                        }
                        if (j == 1 || j == 2 || j == 3 || j == 4 || j == 5 || j == 6) {
                            tablohucresi.setAttribute('id', 'yerdekis');
                            kartsayisi.setAttribute('id', 'yerdiv');
                            kartsayisic.setAttribute('id', 'yerdivic');
                            tablohucresi.appendChild(kartsayisi);
                            kartsayisi.appendChild(kartsayisic);
                        }
                    }
                    if (i == 0 && j == 5) {
                        tablohucresi.style.visibility = 'visible';
                        tablohucresi.setAttribute('id', 'yenioyun');
                        tablohucresi.style.border = 'none';
                        
                        tablohucresi.style.fontSize = yeniboyut / 25;
                        var ynoynb = document.createElement("B");
                        ynoynb.innerHTML = '&#8634;';
                        ynoynb.style.cursor = 'pointer';
                        ynoynb.onclick = function () { yenioyun() };
                        ynoynb.style.fontWeight = '1000';
                        tablohucresi.appendChild(ynoynb);
                    }
                    if (i == 5 && j == 6) {
                        tablohucresi.setAttribute('id', 'besalarm');
                        tablohucresi.style.fontWeight = '1000';
                        tablohucresi.innerHTML = '5 VAR';
                        tablohucresi.style.fontSize = yeniboyut / 30;
                        tablohucresi.style.backgroundColor = 'red';
                        tablohucresi.style.visibility = 'hidden';
                    }
                    if (i == 0 && j == 0) {
                        tablohucresi.style.fontSize = yeniboyut / 50;
                        tablohucresi.style.fontWeight = '1000';
                        tablohucresi.innerHTML = 'YERDEKİ KARTLAR';
                        tablohucresi.style.paddingTop = yeniboyut / 24;  ///
                        tablohucresi.style.border = 'none';
                    }
                    if (i == 1 && j == 6) {
                        tablohucresi.style.fontSize = yeniboyut / 50;
                        tablohucresi.style.fontWeight = '1000';
                        tablohucresi.innerHTML = 'ARANAN KART';
                        tablohucresi.style.paddingTop = yeniboyut / 24; ///
                        tablohucresi.style.border = 'none';
                    }
                    if (i == 3 && j == 6) {
                        tablohucresi.style.fontSize = yeniboyut / 50;
                        tablohucresi.style.fontWeight = '1000';
                        tablohucresi.innerHTML = 'BULUNAN KART';
                        tablohucresi.style.paddingTop = yeniboyut / 24; ///
                        tablohucresi.style.border = 'none';
                    }
                    if (i == 0 && j == 6) {
                        tablohucresi.setAttribute('id', 'tamekran');
                        tablohucresi.style.fontSize = yeniboyut / 30;
                        tablohucresi.style.border = 'none';
                        tablohucresi.style.paddingTop = yeniboyut / 24;  ///
                        var tambrws = document.createElement("B");
                        tambrws.setAttribute('id', 'tambrws');
                        tambrws.innerHTML = '&#9635;';
                        tambrws.onclick = function () { opentambrws(); };
                        tambrws.style.cursor = 'pointer';
                        tambrws.style.fontWeight = '1000';
                        var arabslk = document.createElement("BR");
                        var tamekrts = document.createElement("B");
                        tamekrts.setAttribute('id', 'tamekrts');
                        tamekrts.innerHTML = '[]';
                        tamekrts.onclick = function () { openFullscreen(); };
                        tamekrts.style.cursor = 'pointer';
                        tamekrts.style.fontWeight = '1000';
                        tablohucresi.appendChild(tamekrts);
                        tablohucresi.appendChild(arabslk);
                        tablohucresi.appendChild(tambrws);
                    }
                }
            }
            Cbg();
            guncellekartsayisi();
        }
        window.onresize = function () { yenidenboyutla(); yenidenboyutland(); }
        function yenidenboyutla() {
            var yeniboyut = 0;
            var style = window.getComputedStyle(document.getElementById('pencere'));
            if (parseInt(style.height) > parseInt(style.width))
                yeniboyut = parseInt(style.width);
            else if (parseInt(style.height) < parseInt(style.width))
                yeniboyut = parseInt(style.height);
            else
                yeniboyut = parseInt(style.height);


            var odldivbrnz = document.getElementById('bronzodl');
            odldivbrnz.setAttribute('width', yeniboyut / 11);
            odldivbrnz.setAttribute('height', yeniboyut / 11);
            var bronzodlimg = document.getElementById('bronzodlimg');
            bronzodlimg.setAttribute('width', yeniboyut / 12);
            bronzodlimg.setAttribute('height', yeniboyut / 12);

            var odldivgms = document.getElementById('gumusodl');
            odldivgms.setAttribute('width', yeniboyut / 11);
            odldivgms.setAttribute('height', yeniboyut / 11);
            var gumusodlimg = document.getElementById('gumusodlimg');
            gumusodlimg.setAttribute('width', yeniboyut / 12);
            gumusodlimg.setAttribute('height', yeniboyut / 12);

            var odldivaltn = document.getElementById('altinodl');
            odldivaltn.setAttribute('width', yeniboyut / 11);
            odldivaltn.setAttribute('height', yeniboyut / 11);
            var altinodlimg = document.getElementById('altinodlimg');
            altinodlimg.setAttribute('width', yeniboyut / 12);
            altinodlimg.setAttribute('height', yeniboyut / 12);


            for (var k = 0; k < document.getElementsByClassName('kutular').length; k++) {
                var tablohucresi = document.getElementsByClassName('kutular')[k];
                tablohucresi.setAttribute('width', yeniboyut / 10);
                tablohucresi.setAttribute('height', yeniboyut / 10);
                tablohucresi.style.fontSize = yeniboyut / 17;
            }
            for (var i = 0; i < document.getElementsByClassName('kartsayisi').length; i++) {
                var kartsayisi = document.getElementsByClassName('kartsayisi')[i];
                var kartsayisic = document.getElementsByClassName('kartsayisic')[i];
                kartsayisi.setAttribute('width', yeniboyut / 14);
                kartsayisi.setAttribute('height', yeniboyut / 14);
                kartsayisi.style.fontSize = yeniboyut / 21;
                kartsayisic.setAttribute('width', yeniboyut / 40);
                kartsayisic.setAttribute('height', yeniboyut / 40);
                kartsayisic.style.fontSize = yeniboyut / 43;
            }
            for (var j = 0; j < document.getElementsByClassName('yankutular').length; j++) {
                var tablohucresi = document.getElementsByClassName('yankutular')[j];
                tablohucresi.setAttribute('width', yeniboyut / 10);
                tablohucresi.setAttribute('height', yeniboyut / 10);
                if (j == 0 || j == 8 || j == 12 || j == 17) {
                    tablohucresi.style.fontSize = yeniboyut / 50;
                    if (j == 0 || j == 8 || j == 12)
                        tablohucresi.style.paddingTop = yeniboyut / 24;
                }
                else if (j == 4) {
                    tablohucresi.style.fontSize = yeniboyut / 20;
                }
                else if (j == 5) {
                    tablohucresi.style.fontSize = yeniboyut / 25;
                }
                else if (j == 6) {
                    tablohucresi.style.fontSize = yeniboyut / 30;
                    tablohucresi.style.paddingTop = yeniboyut / 24;
                }
                else if (j == 10 || j == 14) {
                    tablohucresi.style.fontSize = yeniboyut / 17;
                }
                else if (j == 16) {
                    tablohucresi.style.fontSize = yeniboyut / 30;
                }
            }
        }

        function Cbg() {
            for (var i = 0; i < document.getElementsByClassName('kutular').length; i++) {
                if (oynhksys < oynhk.length - 1) {
                    renkver = document.getElementsByClassName('kutular')[i];
                    renklendir();
                    if (i == 0) {
                        renkver = document.getElementsByClassName('yankutular')[10]; renklendir();
                        renkver = document.getElementsByClassName('yankutular')[14]; renklendir();
                    }
                }
                else if (renkverildi == true) {
                    renkverildi = false;
                    if (renkverilcek == true) {
                        renkver = document.getElementsByClassName('kutular')[buhucre];
                        renklendir();
                    }
                    renkver = document.getElementsByClassName('yankutular')[10]; renklendir();
                    renkver = document.getElementsByClassName('yankutular')[14]; renklendir();
                }
            }
        }
        function renklendir() {
            if (renkver.innerHTML == 'K') { renkver.style.backgroundColor = '#a40000'; }
            else if (renkver.innerHTML == '1') { renkver.style.backgroundColor = '#63A228'; }
            else if (renkver.innerHTML == '2') { renkver.style.backgroundColor = '#C98731'; }
            else if (renkver.innerHTML == '3') { renkver.style.backgroundColor = '#E3C528'; }
            else if (renkver.innerHTML == '4') { renkver.style.backgroundColor = '#B82BB7'; }
            else if (renkver.innerHTML == '5') { renkver.style.backgroundColor = '#1369E2'; }
            else { renkver.style.backgroundColor = '#214D40'; }
        }




        var tamekrnd = false;
        var yazlnsynd = [];
        var buhucrend;
        var buhucrendonckkntrlnd = -1;
        var bsykdznd = [];
        var birnd, ikind, ucnd, dortnd, besnd, altind, yedind, sekiznd;
        var bndncksyiki;

        function openFullscreennd() {
            if (tamekrnd == false) {
                tamekrnd = true;
                var oyncnvstmnd = document.getElementById('notdefteri');
                oynpencerend = oyncnvstmnd.offsetTop;
                if (oyncnvstmnd.requestFullscreen) {
                    oyncnvstmnd.requestFullscreen();
                } else if (oyncnvstmnd.mozRequestFullScreen) { /* Firefox */
                    oyncnvstmnd.mozRequestFullScreen();
                } else if (oyncnvstmnd.webkitRequestFullscreen) { /* Chrome, Safari & Opera */
                    oyncnvstmnd.webkitRequestFullscreen();
                } else if (oyncnvstmnd.msRequestFullscreen) { /* IE/Edge */
                    oyncnvstmnd.msRequestFullscreen();
                }
            }
            else {
                tamekrnd = false;
                window.scrollTo(0, oynpencerend);
                if (document.exitFullscreen) {
                    document.exitFullscreen();
                } else if (document.mozCancelFullScreen) { /* Firefox */
                    document.mozCancelFullScreen();
                } else if (document.webkitExitFullscreen) { /* Chrome, Safari and Opera */
                    document.webkitExitFullscreen();
                } else if (document.msExitFullscreen) { /* IE/Edge */
                    document.msExitFullscreen();
                }
            }
        }

        

        function tabloyuolusturnd() {
            var sayilartablosund = document.getElementById('sayitablosund');
            var satirhucresayisind = 0;
            var stylend = window.getComputedStyle(document.getElementById('notdefteri'));
            var yeniboyutnd = 0;
            if (parseInt(stylend.height) > parseInt(stylend.width))
                yeniboyutnd = parseInt(stylend.width);
            else if (parseInt(stylend.height) < parseInt(stylend.width))
                yeniboyutnd = parseInt(stylend.height);
            else
                yeniboyutnd = parseInt(stylend.height);
            for (var i = 0; i < 6; i++) {
                if (sayilartablosund.rows[i] != null) {
                    sayilartablosund.deleteRow(i);
                }

                var tablosatirind = sayilartablosund.insertRow(i);

                for (var j = 0; j < 6; j++) {
                    var tablohucresind = tablosatirind.insertCell(j);
                    if (j > 0 && i < 6 && j < 6 && i > 0) {
                        tablohucresind.setAttribute('id', 'idnd' + satirhucresayisind);
                        tablohucresind.onclick = function () { dizikntrlnd(this.id); };
                        satirhucresayisind++;
                        tablohucresind.style.cursor = 'pointer';
                    }

                    if (i != 0 && j != 0 && i != 6 && j != 6)
                        tablohucresind.setAttribute('class', 'kutularnd');
                    else
                        tablohucresind.setAttribute('class', 'yankutularnd');

                    tablohucresind.setAttribute('width', yeniboyutnd / 10);
                    tablohucresind.setAttribute('height', yeniboyutnd / 10);
                    tablohucresind.style.fontSize = yeniboyutnd / 17;
                    tablohucresind.style.fontWeight = '1000';

                    if (j == 0) {
                        var kartsayisi = document.createElement("DIV");
                        var kartsayisic = document.createElement("DIV");
                        kartsayisi.setAttribute('width', yeniboyutnd / 14);
                        kartsayisi.setAttribute('height', yeniboyutnd / 14);
                        kartsayisi.style.fontSize = yeniboyutnd / 21;
                        kartsayisi.setAttribute('class', 'kartsayisind');
                        kartsayisic.setAttribute('width', yeniboyutnd / 40);
                        kartsayisic.setAttribute('height', yeniboyutnd / 40);
                        kartsayisic.style.fontSize = yeniboyutnd / 43;
                        kartsayisic.style.color = 'white';
                        kartsayisic.setAttribute('class', 'kartsayisicnd');
                        tablohucresind.style.cursor = 'pointer';

                        if (i == 0) {
                            kartsayisi.innerHTML = 'K';
                            kartsayisi.style.backgroundColor = '#a40000';
                            tablohucresind.onclick = function () { secilenyaznd('K'); };
                        }
                        else if (i == 1) {
                            kartsayisi.innerHTML = '1';
                            kartsayisi.style.backgroundColor = '#63A228';
                            tablohucresind.onclick = function () { secilenyaznd('1'); };
                        }
                        else if (i == 2) {
                            kartsayisi.innerHTML = '2';
                            kartsayisi.style.backgroundColor = '#C98731';
                            tablohucresind.onclick = function () { secilenyaznd('2'); };
                        }
                        else if (i == 3) {
                            kartsayisi.innerHTML = '3';
                            kartsayisi.style.backgroundColor = '#E3C528';
                            tablohucresind.onclick = function () { secilenyaznd('3'); };
                        }
                        else if (i == 4) {
                            kartsayisi.innerHTML = '4';
                            kartsayisi.style.backgroundColor = '#B82BB7';
                            tablohucresind.onclick = function () { secilenyaznd('4'); };
                        }
                        else if (i == 5) {
                            kartsayisi.innerHTML = '5';
                            kartsayisi.style.backgroundColor = '#1369E2';
                            tablohucresind.onclick = function () { secilenyaznd('5'); };
                        }
                        kartsayisi.setAttribute('id', 'yerdivnd');
                        kartsayisic.setAttribute('id', 'yerdivicnd');
                        tablohucresind.appendChild(kartsayisi);
                        kartsayisi.appendChild(kartsayisic);
                    }

                    if (i == 0 && j == 3) {
                        var ynlsgrs = document.createElement("DIV");
                        ynlsgrs.setAttribute('width', yeniboyutnd / 14);
                        ynlsgrs.setAttribute('height', yeniboyutnd / 14);
                        tablohucresind.style.fontSize = yeniboyutnd / 28;
                        ynlsgrs.setAttribute('class', 'besvy');
                        ynlsgrs.innerHTML = '5<BR>YOK';
                        ynlsgrs.style.backgroundColor = '#099a6f';
                        tablohucresind.appendChild(ynlsgrs);
                        tablohucresind.style.cursor = 'pointer';
                        ynlsgrs.onclick = function () { besyoknd(); };
                    }

                    if (i == 0 && j == 2) {
                        var besvarsznd = document.createElement("DIV");
                        besvarsznd.setAttribute('width', yeniboyutnd / 14);
                        besvarsznd.setAttribute('height', yeniboyutnd / 14);
                        tablohucresind.style.fontSize = yeniboyutnd / 28;
                        besvarsznd.setAttribute('class', 'besvy');
                        besvarsznd.innerHTML = '5<br>VAR';
                        besvarsznd.style.backgroundColor = '#1369E2';
                        tablohucresind.appendChild(besvarsznd);
                        tablohucresind.style.cursor = 'pointer';
                        besvarsznd.onclick = function () { besvarnd(); };
                    }

                    if (i == 0 && j == 1) {
                        var krtslsznd = document.createElement("DIV");
                        krtslsznd.setAttribute('width', yeniboyutnd / 14);
                        krtslsznd.setAttribute('height', yeniboyutnd / 14);
                        tablohucresind.style.fontSize = yeniboyutnd / 28;
                        krtslsznd.setAttribute('class', 'besvy');
                        krtslsznd.style.paddingTop = yeniboyutnd / 48;
                        krtslsznd.style.paddingBottom = yeniboyutnd / 48;
                        krtslsznd.innerHTML = 'SİL';
                        krtslsznd.style.backgroundColor = '#214D40';
                        tablohucresind.style.cursor = 'pointer';
                        tablohucresind.appendChild(krtslsznd);
                        tablohucresind.onclick = function () { krtslnd(); };
                    }

                    if (i == 0 && j == 4) {
                        tablohucresind.style.visibility = 'visible';
                        tablohucresind.setAttribute('id', 'yenioyund');
                        tablohucresind.style.border = 'none';
                        
                        tablohucresind.style.fontSize = yeniboyutnd / 25;
                        var ynoynb = document.createElement("B");
                        ynoynb.innerHTML = '&#8634;';
                        ynoynb.style.cursor = 'pointer';
                        ynoynb.onclick = function () { yenioyund(); };
                        ynoynb.style.fontWeight = '1000';
                        tablohucresind.appendChild(ynoynb);
                    }
                    if (i == 0 && j == 5) {
                        tablohucresind.setAttribute('id', 'tamekrnd');
                        tablohucresind.style.fontSize = yeniboyutnd / 30;
                        tablohucresind.style.border = 'none';
                        tablohucresind.style.paddingTop = yeniboyutnd / 24;  ///
                        
                        var arabslk = document.createElement("BR");
                        var tamekrtsnd = document.createElement("B");
                        tamekrtsnd.setAttribute('id', 'tamekrtsnd');
                        tamekrtsnd.innerHTML = '<i class="fas fa-expand"></i>'; // FontAwesome ikonu
                        tamekrtsnd.onclick = function () { openFullscreennd(); };
                        tamekrtsnd.style.cursor = 'pointer';
                        tamekrtsnd.style.fontWeight = '1000';
                        tablohucresind.appendChild(tamekrtsnd);
                        tablohucresind.appendChild(arabslk);
                        
                    }
                }
            }
        }
        function yenidenboyutland() {
            var yeniboyutnd = 0;
            var stylend = window.getComputedStyle(document.getElementById('notdefteri'));
            if (parseInt(stylend.height) > parseInt(stylend.width))
                yeniboyutnd = parseInt(stylend.width);
            else if (parseInt(stylend.height) < parseInt(stylend.width))
                yeniboyutnd = parseInt(stylend.height);
            else
                yeniboyutnd = parseInt(stylend.height);

            for (var k = 0; k < document.getElementsByClassName('kutularnd').length; k++) {
                var tablohucresind = document.getElementsByClassName('kutularnd')[k];
                tablohucresind.setAttribute('width', yeniboyutnd / 10);
                tablohucresind.setAttribute('height', yeniboyutnd / 10);
                tablohucresind.style.fontSize = yeniboyutnd / 17;
            }
            for (var i = 0; i < document.getElementsByClassName('kartsayisind').length; i++) {
                var kartsayisi = document.getElementsByClassName('kartsayisind')[i];
                var kartsayisic = document.getElementsByClassName('kartsayisicnd')[i];
                kartsayisi.setAttribute('width', yeniboyutnd / 14);
                kartsayisi.setAttribute('height', yeniboyutnd / 14);
                kartsayisi.style.fontSize = yeniboyutnd / 21;
                kartsayisic.setAttribute('width', yeniboyutnd / 40);
                kartsayisic.setAttribute('height', yeniboyutnd / 40);
                kartsayisic.style.fontSize = yeniboyutnd / 43;
            }
            for (var j = 1; j < document.getElementsByClassName('yankutularnd').length; j++) {
                var tablohucresind = document.getElementsByClassName('yankutularnd')[j];
                tablohucresind.setAttribute('width', yeniboyutnd / 10);
                tablohucresind.setAttribute('height', yeniboyutnd / 10);
                if (j == 2) {
                    var besvarrsznd = document.getElementsByClassName('besvy')[1];
                    besvarrsznd.setAttribute('width', yeniboyutnd / 14);
                    besvarrsznd.setAttribute('height', yeniboyutnd / 14);
                    tablohucresind.style.fontSize = yeniboyutnd / 28;
                }
                if (j == 1) {
                    var besvarkrtslrsznd = document.getElementsByClassName('besvy')[0];
                    besvarkrtslrsznd.setAttribute('width', yeniboyutnd / 14);
                    besvarkrtslrsznd.setAttribute('height', yeniboyutnd / 14);
                    besvarkrtslrsznd.style.paddingTop = yeniboyutnd / 48;
                    besvarkrtslrsznd.style.paddingBottom = yeniboyutnd / 48;
                    tablohucresind.style.fontSize = yeniboyutnd / 28;
                }
                if (j == 3) {
                    var besyokrszknd = document.getElementsByClassName('besvy')[2];
                    besyokrszknd.setAttribute('width', yeniboyutnd / 14);
                    besyokrszknd.setAttribute('height', yeniboyutnd / 14);
                    tablohucresind.style.fontSize = yeniboyutnd / 28;
                }
                else if (j == 4) {
                    tablohucresind.style.fontSize = yeniboyutnd / 25;
                }
                else if (j == 5) {
                    tablohucresind.style.fontSize = yeniboyutnd / 30;
                    tablohucresind.style.paddingTop = yeniboyutnd / 24;
                }
            }
        }

        function renklendirnd() {
            for (var i = 0; i < document.getElementsByClassName('kutularnd').length; i++) {
                var renkver = document.getElementsByClassName('kutularnd')[i];
                if (renkver.innerHTML == 'K' && bsykdznd[i] != 2) { renkver.style.backgroundColor = '#a40000'; }
                else if (renkver.innerHTML == '1' && bsykdznd[i] != 2) { renkver.style.backgroundColor = '#63A228'; }
                else if (renkver.innerHTML == '2' && bsykdznd[i] != 2) { renkver.style.backgroundColor = '#C98731'; }
                else if (renkver.innerHTML == '3' && bsykdznd[i] != 2) { renkver.style.backgroundColor = '#E3C528'; }
                else if (renkver.innerHTML == '4' && bsykdznd[i] != 2) { renkver.style.backgroundColor = '#B82BB7'; }
                else if (renkver.innerHTML == '5' && bsykdznd[i] != 2) { renkver.style.backgroundColor = '#1369E2'; }
                if (bsykdznd[i] == 0 && bsykdznd[i] != 2) { renkver.style.backgroundColor = '#214D40'; }
                else if (bsykdznd[i] == 1) { renkver.style.backgroundColor = '#1369E2'; }
                else if (bsykdznd[i] == 2) { renkver.style.backgroundColor = '#ff0000'; }
                else if (bsykdznd[i] == 3) { renkver.style.backgroundColor = '#099a6f'; }
            }
        }

        function yenioyund() {
            yazlnsyndsfrlnd();
            buhucrend = null;
            buhucrendoncknd = null;
            guncelkrtsynd();
            for (var hksynd = 0; hksynd < 25; hksynd++) {
                bsykdznd[hksynd] = 0;
            }
            renklendirnd();
        }
        function yazlnsyndsfrlnd() {
            for (var i = 0; i < 25; i++) {
                yazlnsynd[i] = '';
                document.getElementsByClassName('kutularnd')[i].style.border = '2px inset gray';
            }
            hcrlyznd();
        }
        function dizikntrlnd(gelenid) {
            var sira = gelenid.slice(4);
            buhucrend = parseInt(sira);
            if (buhucrendoncknd != null) {
                document.getElementsByClassName('kutularnd')[buhucrendoncknd].style.border = '2px inset gray';
            }
            var dgsckhcr = document.getElementsByClassName('kutularnd')[buhucrend];
            dgsckhcr.style.border = '2px inset blue';
            buhucrendoncknd = sira;
        }

        function secilenyaznd(yzlcksy) {
            if (buhucrend != null && yazlnsynd[buhucrend] == '') {
                if (yazlnsynd[buhucrend] != yzlcksy) {
                    yazlnsynd[buhucrend] = yzlcksy;
                    bsykdznd[buhucrend] = -1;
                    if (yazlnsynd[buhucrend] == '5') {
                        besciktind('yazdind');
                    }
                    hcrlyznd();
                }
                else {
                    if (yazlnsynd[buhucrend] == '5') {
                        besslndnd();
                    }
                    hcrlyznd();
                }
            }
        }

        function besslndnd() {
            bsykdznd[buhucrend] = 0;
            besciktind('sildind');
            yazlnsynd[buhucrend] = '';
        }

        function hcrlyznd() {
            if (buhucrend != null) {
                for (var hcyz = 0; hcyz < 25; hcyz++) {
                    var yzlckhcre = document.getElementsByClassName('kutularnd')[hcyz];
                    yzlckhcre.innerHTML = yazlnsynd[hcyz];
                }
                renklendirnd();
                guncelkrtsynd();
            }
        }

        function besciktind(yazind) {
            var modbesbscnd = buhucrend % 5;
            birnd = parseInt(buhucrend) + 1; ikind = parseInt(buhucrend) + 4; ucnd = parseInt(buhucrend) + 5; dortnd = parseInt(buhucrend) + 6;
            besnd = parseInt(buhucrend) - 1; altind = parseInt(buhucrend) - 4; yedind = parseInt(buhucrend) - 5; sekiznd = parseInt(buhucrend) - 6;
            if (modbesbscnd == 0 || modbesbscnd == 1 || modbesbscnd == 2 || modbesbscnd == 3 || modbesbscnd == 4) {
                if (bsykdznd[ucnd] != -1) {
                    if (yazind == 'yazdind')
                        bsykdznd[ucnd] = 2;
                    else
                        bsykdznd[ucnd] = 0;
                }
                if (bsykdznd[yedind] != -1) {
                    if (yazind == 'yazdind')
                        bsykdznd[yedind] = 2;
                    else
                        bsykdznd[yedind] = 0;
                }
            }
            if (modbesbscnd == 0 || modbesbscnd == 1 || modbesbscnd == 2 || modbesbscnd == 3) {
                if (bsykdznd[birnd] != -1) {
                    if (yazind == 'yazdind')
                        bsykdznd[birnd] = 2;
                    else
                        bsykdznd[birnd] = 0;
                }
                if (bsykdznd[dortnd] != -1) {
                    if (yazind == 'yazdind')
                        bsykdznd[dortnd] = 2;
                    else
                        bsykdznd[dortnd] = 0;
                }
                if (bsykdznd[altind] != -1) {
                    if (yazind == 'yazdind')
                        bsykdznd[altind] = 2;
                    else
                        bsykdznd[altind] = 0;
                }
            }
            if (modbesbscnd == 4 || modbesbscnd == 1 || modbesbscnd == 2 || modbesbscnd == 3) {
                if (bsykdznd[besnd] != -1) {
                    if (yazind == 'yazdind')
                        bsykdznd[besnd] = 2;
                    else
                        bsykdznd[besnd] = 0;
                }
                if (bsykdznd[ikind] != -1) {
                    if (yazind == 'yazdind')
                        bsykdznd[ikind] = 2;
                    else
                        bsykdznd[ikind] = 0;
                }
                if (bsykdznd[sekiznd] != -1) {
                    if (yazind == 'yazdind')
                        bsykdznd[sekiznd] = 2;
                    else
                        bsykdznd[sekiznd] = 0;
                }
            }
            hcrlyznd();
            renklendirnd();
        }
        function besvarnd() {
            if (yazlnsynd[buhucrend] != '') {
                bndncksyiki = buhucrendonckkntrlnd;
                buhucrendonckkntrlnd = buhucrend;
                var brdsyvr = document.getElementsByClassName('kutularnd')[buhucrend];
                var modbesnd = buhucrend % 5;
                birnd = parseInt(buhucrend) + 1; ikind = parseInt(buhucrend) + 4; ucnd = parseInt(buhucrend) + 5; dortnd = parseInt(buhucrend) + 6;
                besnd = parseInt(buhucrend) - 1; altind = parseInt(buhucrend) - 4; yedind = parseInt(buhucrend) - 5; sekiznd = parseInt(buhucrend) - 6;
                if (modbesnd == 0 || modbesnd == 1 || modbesnd == 2 || modbesnd == 3 || modbesnd == 4) {
                    if (bsykdznd[ucnd] == 0)
                        bsykdznd[ucnd] = 1;
                    if (bsykdznd[yedind] == 0)
                        bsykdznd[yedind] = 1;
                }
                if (modbesnd == 0 || modbesnd == 1 || modbesnd == 2 || modbesnd == 3) {
                    if (bsykdznd[birnd] == 0)
                        bsykdznd[birnd] = 1;
                    if (bsykdznd[dortnd] == 0)
                        bsykdznd[dortnd] = 1;
                    if (bsykdznd[altind] == 0)
                        bsykdznd[altind] = 1;
                }
                if (modbesnd == 4 || modbesnd == 1 || modbesnd == 2 || modbesnd == 3) {
                    if (bsykdznd[ikind] == 0)
                        bsykdznd[ikind] = 1;
                    if (bsykdznd[besnd] == 0)
                        bsykdznd[besnd] = 1;
                    if (bsykdznd[sekiznd] == 0)
                        bsykdznd[sekiznd] = 1;
                }
            }
            else {
                buhucrendonckkntrlnd = bndncksyiki;
                besciktind('sildind');
            }
            hcrlyznd();
            renklendirnd();
        }
        function besyoknd() {
            if (yazlnsynd[buhucrend] != '') {
                birnd = parseInt(buhucrend) + 1; ikind = parseInt(buhucrend) + 4; ucnd = parseInt(buhucrend) + 5; dortnd = parseInt(buhucrend) + 6;
                besnd = parseInt(buhucrend) - 1; altind = parseInt(buhucrend) - 4; yedind = parseInt(buhucrend) - 5; sekiznd = parseInt(buhucrend) - 6;
                var modbesyknd = buhucrend % 5;
                if (modbesyknd == 0 || modbesyknd == 1 || modbesyknd == 2 || modbesyknd == 3 || modbesyknd == 4) {
                    if (bsykdznd[ucnd] != 2) {
                        if (bsykdznd[ucnd] == 0 || bsykdznd[ucnd] == 1)
                            bsykdznd[ucnd] = 3;
                    }
                    if (bsykdznd[yedind] != 2) {
                        if (bsykdznd[yedind] == 0 || bsykdznd[yedind] == 1)
                            bsykdznd[yedind] = 3;
                    }
                }
                if (modbesyknd == 0 || modbesyknd == 1 || modbesyknd == 2 || modbesyknd == 3) {
                    if (bsykdznd[birnd] != 2) {
                        if (bsykdznd[birnd] == 0 || bsykdznd[birnd] == 1)
                            bsykdznd[birnd] = 3;
                    }
                    if (bsykdznd[dortnd] != 2) {
                        if (bsykdznd[dortnd] == 0 || bsykdznd[dortnd] == 1)
                            bsykdznd[dortnd] = 3;
                    }
                    if (bsykdznd[altind] != 2) {
                        if (bsykdznd[altind] == 0 || bsykdznd[altind] == 1)
                            bsykdznd[altind] = 3;
                    }
                }
                if (modbesyknd == 4 || modbesyknd == 1 || modbesyknd == 2 || modbesyknd == 3) {
                    if (bsykdznd[ikind] != 2) {
                        if (bsykdznd[ikind] == 0 || bsykdznd[ikind] == 1)
                            bsykdznd[ikind] = 3;
                    }
                    if (bsykdznd[besnd] != 2) {
                        if (bsykdznd[besnd] == 0 || bsykdznd[besnd] == 1)
                            bsykdznd[besnd] = 3;
                    }
                    if (bsykdznd[sekiznd] != 2) {
                        if (bsykdznd[sekiznd] == 0 || bsykdznd[sekiznd] == 1)
                            bsykdznd[sekiznd] = 3;
                    }
                }
            }
            hcrlyznd();
            renklendirnd();
        }

        function krtslnd() {
            if (bsykdznd[buhucrend] != 0) {
                if (yazlnsynd[buhucrend] != '5') {
                    yazlnsynd[buhucrend] = '';
                    bsykdznd[buhucrend] = 0;
                }
                else
                    besslndnd();
            }
            hcrlyznd();
            renklendirnd();
        }

        function guncelkrtsynd() {
            var birsayisind = 0, ikisayisind = 0, ucsayisind = 0, dortsayisind = 0, bessayisind = 0, ksayisind = 0;

            for (var i = 0; i < yazlnsynd.length; i++) {
                if (yazlnsynd[i] == '1') birsayisind++;
                else if (yazlnsynd[i] == '2') ikisayisind++;
                else if (yazlnsynd[i] == '3') ucsayisind++;
                else if (yazlnsynd[i] == '4') dortsayisind++;
                else if (yazlnsynd[i] == '5') bessayisind++;
                else if (yazlnsynd[i] == 'K') ksayisind++;
            }
            for (var k = 0; k < 6; k++) {
            }
        }
    