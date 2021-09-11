var colors = [['#b37e00', '#cc9000', '#e6a200', '#ffb400', '#ffbc19', '#ffbc19', '#ffc333', '#ffcb4d', '#ffd266'], ['#800037', '#990042', '#b3004d', '#cc0058', '#e60063', '#ff006e', '#ff197d', '#ff338b', '#ff4d9a', '#ff66a8', '#ff80b7', '#ff99c5', '#ffb8d6'], ['#007f56', '#00aa73', '#00d490', '#33dda6', '#66e5bc', '#99eed3'], ['#004866', '#006d99', '#0091cc', '#00b5ff', '#33c4ff', '#66d3ff', '#99e1ff', '#b3e9ff']]
var names = [['Jerry', 'Weihan', 'Shao Jun', 'Bernard', 'Sean', 'Jiaqi', 'Jadie', 'Xiao En'], ['Stefanie', 'See Min', 'Beatrice', 'Celeste', 'Joel', 'Jing Heng', 'Wenhao', 'Wei Sheng', 'Ruoxin', 'Weiting', 'Levina', 'Qiyu'], ['Rachael', 'Alson', 'Zhiheng', ' Huiyan', 'Brandon', 'Xavier'], ['Wei Shuen', 'Yiqin', ' Junwei', 'Mavryk', 'Rae-Anne', 'Ee Hsuen', 'Nanette', 'Yihan']]
var facilGroup = [['Draco', 'Equuleus', 'Lyra', 'Hercules', 'Columba', 'Monoceros', 'Pegasus', 'Orion'], ['Monoceros', 'Columba', 'Lyra', 'Hercules', 'Vela', 'Orion', 'Aquila', 'Monoceros', 'Draco', 'Hercules', 'Orion', 'Equuleus'], ['Vela', 'Aquila', 'Pegasus', ' Orion', 'Draco', 'Equuleus'], ['Lyra', 'Pegasus', 'Monoceros', 'Hercules', 'Aquila', 'Vela', 'Columba', 'Equuleus']]
var schools = ['Presbyterian Ladies\' College, Sydney', 'Ministry of Education, Brunei Darussalam', 'The High School Affliated to Xi\'an Jiaotong University', 'The Second High School Attached to Beijing Normal University', 'Taipei Municipal Jianguo High School', 'Diocesan Girls\' School', 'Avicenna Cinere Senior High School', 'SMA Lazuardi Global Compassionate School', 'SMA Negeri 4 Denpasar', 'Ichinomiya High School', 'Chung Ling High School, Penang', 'Sekolah Sultan Alam Shah, Putrajaya', 'Philippine Science High School Main Campus', 'Anglican High School', 'CHIJ St. Nicholas Girls\' School', 'CHIJ St. Theresa\'s Convent', 'Dunman High School', 'Hwa Chong Institution', 'Methodist Girls\' School', 'Nan Chiau High School', 'Nanyang Girls\' High School', 'National Junior College', 'NUS High School of Math & Science', 'Raffles Girls\' School (Secondary)', 'Raffles Institution', 'River Valley High School', 'School of Science and Technology, Singapore', 'St. Joseph\'s Institution', 'St. Margaret\'s Secondary School', 'Temasek Junior College', 'Victoria Junior College', 'Xinmin Secondary School', 'Zhonghua Secondary School', 'Korea Science Academy of KAIST', 'Mahidol Wittayanusorn School', 'Hanoi-Amsterdam High School for the Gifted', 'High School for Gifted Students, Hanoi National University of Education']

var numCommittees = 4
var committeeMemCnt = [8, 12, 6, 8]

function setCountDown() {
    // Set the date we're counting down to
    var countDownDate = new Date("Jan 19, 2021").getTime();
    
    // Update the count down every 1 second
    var x = setInterval(function() {
    
    // Get today's date and time
    var now = new Date().getTime();
    
    // Find the distance between now and the count down date
    var distance = countDownDate - now;
    
    // Time calculations for days, hours, minutes and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
    // Display the days in the element with id="days"
    document.getElementById("days").innerHTML = days
    document.getElementById("hours").innerHTML = hours
    document.getElementById("minutes").innerHTML = minutes

    document.getElementById("days_").innerHTML = days
    document.getElementById("hours_").innerHTML = hours
    document.getElementById("minutes_").innerHTML = minutes
    
    }, 1000);
}

function changeTimezone(date, ianatz) {

    // suppose the date is 12:00 UTC
    var invdate = new Date(date.toLocaleString('en-US', {
      timeZone: ianatz
    }));
  
    // then invdate will be 07:00 in Toronto
    // and the diff is 5 hours
    var diff = date.getTime() - invdate.getTime();
  
    // so 12:00 in Toronto is 17:00 UTC
    return new Date(date.getTime() - diff); // needs to substract
  
};
  
function formatDate(date, format, utc) {
    var MMMM = ["\x00", "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    var MMM = ["\x01", "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    var dddd = ["\x02", "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    var ddd = ["\x03", "Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    function ii(i, len) {
        var s = i + "";
        len = len || 2;
        while (s.length < len) s = "0" + s;
        return s;
    }

    var y = utc ? date.getUTCFullYear() : date.getFullYear();
    format = format.replace(/(^|[^\\])yyyy+/g, "$1" + y);
    format = format.replace(/(^|[^\\])yy/g, "$1" + y.toString().substr(2, 2));
    format = format.replace(/(^|[^\\])y/g, "$1" + y);

    var M = (utc ? date.getUTCMonth() : date.getMonth()) + 1;
    format = format.replace(/(^|[^\\])MMMM+/g, "$1" + MMMM[0]);
    format = format.replace(/(^|[^\\])MMM/g, "$1" + MMM[0]);
    format = format.replace(/(^|[^\\])MM/g, "$1" + ii(M));
    format = format.replace(/(^|[^\\])M/g, "$1" + M);

    var d = utc ? date.getUTCDate() : date.getDate();
    format = format.replace(/(^|[^\\])dddd+/g, "$1" + dddd[0]);
    format = format.replace(/(^|[^\\])ddd/g, "$1" + ddd[0]);
    format = format.replace(/(^|[^\\])dd/g, "$1" + ii(d));
    format = format.replace(/(^|[^\\])d/g, "$1" + d);

    var H = utc ? date.getUTCHours() : date.getHours();
    format = format.replace(/(^|[^\\])HH+/g, "$1" + ii(H));
    format = format.replace(/(^|[^\\])H/g, "$1" + H);

    var h = H == 0 ? 12 : H;
    format = format.replace(/(^|[^\\])hh+/g, "$1" + ii(h));
    format = format.replace(/(^|[^\\])h/g, "$1" + h);

    var m = utc ? date.getUTCMinutes() : date.getMinutes();
    format = format.replace(/(^|[^\\])mm+/g, "$1" + ii(m));
    format = format.replace(/(^|[^\\])m/g, "$1" + m);

    var s = utc ? date.getUTCSeconds() : date.getSeconds();
    format = format.replace(/(^|[^\\])ss+/g, "$1" + ii(s));
    format = format.replace(/(^|[^\\])s/g, "$1" + s);

    var f = utc ? date.getUTCMilliseconds() : date.getMilliseconds();
    format = format.replace(/(^|[^\\])fff+/g, "$1" + ii(f, 3));
    f = Math.round(f / 10);
    format = format.replace(/(^|[^\\])ff/g, "$1" + ii(f));
    f = Math.round(f / 10);
    format = format.replace(/(^|[^\\])f/g, "$1" + f);

    var T = H < 12 ? "AM" : "PM";
    format = format.replace(/(^|[^\\])TT+/g, "$1" + T);
    format = format.replace(/(^|[^\\])T/g, "$1" + T.charAt(0));

    var t = T.toLowerCase();
    format = format.replace(/(^|[^\\])tt+/g, "$1" + t);
    format = format.replace(/(^|[^\\])t/g, "$1" + t.charAt(0));

    var tz = -date.getTimezoneOffset();
    var K = utc || !tz ? "Z" : tz > 0 ? "+" : "-";
    if (!utc) {
        tz = Math.abs(tz);
        var tzHrs = Math.floor(tz / 60);
        var tzMin = tz % 60;
        K += ii(tzHrs) + ":" + ii(tzMin);
    }
    format = format.replace(/(^|[^\\])K/g, "$1" + K);

    var day = (utc ? date.getUTCDay() : date.getDay()) + 1;
    format = format.replace(new RegExp(dddd[0], "g"), dddd[day]);
    format = format.replace(new RegExp(ddd[0], "g"), ddd[day]);

    format = format.replace(new RegExp(MMMM[0], "g"), MMMM[M]);
    format = format.replace(new RegExp(MMM[0], "g"), MMM[M]);

    format = format.replace(/\\(.)/g, "$1");

    return format;
};

function loadButtonColors() {
    for (i=1; i<=numCommittees; i++) {
        for(j=1; j<=committeeMemCnt[i - 1]; j++) {
            var btn = document.getElementById('p_' + i + '_' + j + '_button')
            btn.style.backgroundColor = colors[i - 1][j - 1]
        }
    }
}

function loadIndividualProfiles() {

    var path = './images/org/';

    for (i=1; i<=numCommittees; i++) {
        for(j=1; j<=committeeMemCnt[i - 1]; j++) {
            var appendDiv = document.getElementById('p_' + i + '_div');
            var profileTemp = document.getElementById('p_' + i + '_temp');
            var px = profileTemp.cloneNode(true);

            px.id = 'p_' + i + '_' + j

            // var px = document.getElementById('p_1_' + i);

            var dp = px.childNodes[1]
            console.log(dp)
            if(!dp.src) {
                dp = px.childNodes[3].childNodes[1]
                var textBox = px.childNodes[1]
            } else {
                var textBox = px.childNodes[3]
            }
            dp.src = path + 'p_' + i + '_' + j + '.png';
            dp.style.borderColor = colors[i - 1][j - 1]
            dp.style.background = colors[i - 1][j - 1]
            
            textBox.childNodes[1].textContent = names[i - 1][j - 1]
            textBox.childNodes[3].textContent = 'Facil Group: ' + facilGroup[i - 1][j - 1]

            appendDiv.appendChild(px);
        }
    }
}

function loadIndividualProfilesS() {

    var path = './images/org/';

    for (i=1; i<=numCommittees; i++) {
        for(j=1; j<=committeeMemCnt[i - 1]; j++) {
            var appendDiv = document.getElementById('p_' + i + '_div_s');
            var profileTemp = document.getElementById('p_' + i + '_temp_s');

            var px = profileTemp.cloneNode(true);
            px.id = 'p_' + i + '_' + j + '_s'

            // var px = document.getElementById('p_1_' + i);

            var dp = px.childNodes[1].childNodes[1].childNodes[1]

            dp.src = path + 'p_' + i + '_' + j + '.png';
            dp.style.borderColor = colors[i - 1][j - 1]
            dp.style.background = colors[i - 1][j - 1]

            px.childNodes[1].childNodes[3].childNodes[1].childNodes[1].textContent = names[i - 1][j - 1]
            px.childNodes[1].childNodes[3].childNodes[1].childNodes[3].textContent = 'Facil Group: ' + facilGroup[i - 1][j - 1]
            appendDiv.appendChild(px);
        }
    }
}

function show(obj) {
    var idEle = obj.id.split("_");
    var target = 'p_' + idEle[1] + '_' + idEle[2]

    var profile = document.getElementById(target);
    profile.style.display = null;   

    var target = 'p_' + idEle[1] + '_' + idEle[2] + '_s'

    var profile = document.getElementById(target);
    profile.style.display = null;
}

function hide(obj) {
    var idEle = obj.id.split("_");
    var target = 'p_' + idEle[1] + '_' + idEle[2]

    var profile = document.getElementById(target);
    profile.style.display = 'none';

    var target = 'p_' + idEle[1] + '_' + idEle[2] + '_s'

    var profile = document.getElementById(target);
    profile.style.display = 'none';
}

// used in profiles and media 
var navs = ['profilesBar', 'mediaBar']
function showNav(id) {
    document.getElementById(id).style.display = 'block'
    for (i=0; i < navs.length; i++) {
        if (navs[i] != id) {
            document.getElementById(navs[i]).style.display = 'none'
        }
    }
    // var c = document.getElementById('icon_list').children;
}
function hideNav(id) {
    document.getElementById(id).style.display = 'none'
    for (i=0; i< navs.length; i++) {
        if (navs[i] != id) {
            document.getElementById(navs[i]).style.display = 'block'
        }
    }
    // var c = document.getElementById('icon_list').children;
}

// used in pages other than profiles and media 
function showProfiles(id, color=['#BFBFBF', '#404040']) {
    document.getElementById("top_nav_container").style.backgroundColor = '#404040'
    document.getElementById(id).style.display = 'block'
    var c = document.getElementById('icon_list').children;
    for(i=0; i < c.length; i++) {
        c[i].children[0].style.backgroundColor = color[0]
        c[i].children[0].style.color = color[1]
    }
    for (i=0; i < navs.length; i++) {
        if (navs[i] != id) {
            document.getElementById(navs[i]).style.display = 'none'
        }
    }
}
function hideProfiles(id, color=['#404040', null]) {
    document.getElementById("top_nav_container").style.backgroundColor = null
    document.getElementById(id).style.display = 'none'
    var c = document.getElementById('icon_list').children;
    for(i=0; i < c.length; i++) {
        c[i].children[0].style.backgroundColor = color[0]
        c[i].children[0].style.color = color[1]
    }
}

// used in profiles_speaker.html to show scroll back button
function scrollFunction(instance, mybutton) {
    if (instance.scroll().ratio.y > 0.11) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
}

function loadLogos() {
    var path = './images/school_logos/'
    var c = 37
    for(i=1; i<=c; i++) {
       var grid = document.getElementById('school_logo_grid')
       var logoImg = document.getElementById('logo_1')
       var clone = logoImg.cloneNode(true)
       clone.style.display = null
       clone.children[0].children[0].children[0].src = path + i + '.png'
       clone.children[0].children[0].children[1].children[0].textContent = schools[i-1]
       grid.appendChild(clone)
    }
}

function setSize(width) {
    if (width <= 960 && width > 640) {
        return 'medium'
    } else if (width <= 640) {
        return 'small'
    } else {
        return 'large'
    }
}

function loadPosters() {
    var image_path = './images/posters'
    for (i=2; i<=posterData.length; i++) {
        var cloneDiv = document.getElementById('body_content_1')
        var cloneDivS = document.getElementById('body_content_1_s')
        var poster = document.getElementById('poster_1')

        var cd = cloneDiv.cloneNode(true);
        var cds = cloneDivS.cloneNode(true);
        var pd = poster.cloneNode(true);

        cd.id = 'body_content_' + i
        cds.id = cd.id + '_s'
        pd.id = 'poster_' + i

        allInfoDiv = document.getElementById('info_div')
        allPosterDiv = document.getElementById('poster_div')

        allInfoDiv.append(cd)
        allInfoDiv.append(cds)
        allPosterDiv.append(pd)
    }

    var attributes = ['no', 'title', 'school', 'student', 'image', 'vid']

    posters = document.querySelectorAll('.poster_image_l')
    for(i=0; i< posters.length;i++) {
        posters[i].src = posterData[i].image + '.png'
    }

    for(i=0; i<attributes.length;i++) {
        posterAtt = document.querySelectorAll('.poster_' + attributes[i])
        posterAttS = document.querySelectorAll('.poster_' + attributes[i] + '_s')

        for(j=0; j<posterAtt.length;j++) {
            pA = posterAtt[j]
            pAS = posterAttS[j]
            if(attributes[i] != 'image' && attributes[i] != 'vid') {
                console.log(attributes[i])
                if(attributes[i] == 'student'){
                    pA.innerHTML = posterData[j][attributes[i]].join("<br>")
                    pAS.innerHTML = posterData[j][attributes[i]].join("<br>")
                } else {
                    pA.textContent = posterData[j][attributes[i]]
                    pAS.textContent = posterData[j][attributes[i]]
                }
            } else if (attributes[i] != 'image') {
                parts = posterData[j][attributes[i]].split('/')
                id = parts[parts.length - 1]
                pA.src = 'https://youtube.com/embed/' + id
                pAS.src = 'https://youtube.com/embed/' + id
            } else {
                pA.src = posterData[j][attributes[i]] + '.png'
                pAS.src = posterData[j][attributes[i]] + '.png'
                
                let id = j + 1
                var eventHandler = function() {
                    var modal = UIkit.modal('#poster_' + id);
                    modal.toggle();
                }
                pA.addEventListener("click", eventHandler.bind(id))
                pAS.addEventListener("click", eventHandler.bind(id))
            }
        }
    }
}