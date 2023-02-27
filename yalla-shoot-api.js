 const getdata = (link)=>{
    const c = document.getElementById('content');
    fetch(link)
    .then(response => response.json())
    .then(data => {
      const images = data.leftteam.images;
      const text = data.leftteam.firstteam;

      const results = data.results;
      const status = data.status;

      const imgs = data.rightteam.images
      const txt = data.rightteam.secondteam

      const view = data.details.view
      const comment = data.details.comment
      const dawri = data.details.dawri

      const table = document.createElement('table');
      const tbody = document.createElement('tbody');
      table.appendChild(tbody);

      for(let i = 0;i<images.length;i++) {
        const urls = Array.from(document.querySelectorAll('.urls'));
        const tr = document.createElement('tr');
        const a = document.createElement('a');
        const td = document.createElement('td');
        const td2 = document.createElement('td');
        const td3 = document.createElement('td');
        const td4 = document.createElement('td');
        const img = document.createElement('img');
        const img2 = document.createElement('img');
        const h = document.createElement('h3');
        const r = document.createElement('h3');
        const s = document.createElement('h3');
        const steam = document.createElement('h3');
        const div = document.createElement('div');
        a.href = urls[0].textContent;
        img.src = images[i];
        img2.src = imgs[i];
        h.textContent = text[i]
        r.textContent = results[i];
        s.textContent = status[i]
        steam.textContent = txt[i]
        div.innerHTML = `
          <h4><i class="fa-solid fa-eye"></i>${view[i]}</h4>
          <h4><i class="fa-sharp fa-solid fa-comment"></i>${comment[i]}</h4>
          <h4><i class="fa-solid fa-medal"></i>${dawri[i]}</h4>
        `
        if(!r.textContent.includes('ص')){
          r.textContent = results[i].split('').reverse().join('');
        }
        td.appendChild(img);
        td.appendChild(h);
        td2.appendChild(r)
        td2.appendChild(s);
        td3.appendChild(img2);
        td3.appendChild(steam);
        td4.appendChild(div);
        let list = td.classList
        list.add('firstinfo')
        let list2 = td2.classList
        list2.add('resulttinfo')
        let list3 = td3.classList
        list3.add('team2')
        tr.appendChild(td);
        tr.appendChild(td2);
        tr.appendChild(td3);
        tr.appendChild(td4);
        a.appendChild(tr);
        tbody.appendChild(a);
      };
      c.innerHTML = ''
      c.appendChild(table);
      console.log('refleshed');
    })
    .catch(error => console.error(error));
  }
  getdata('https://server.yalla-shoot-hd7.com/dev/test/api/today')

  const yesterday = ()=>{
    getdata('https://server.yalla-shoot-hd7.com/dev/test/api/yesterday')
  }
  const today = ()=>{
    getdata('https://server.yalla-shoot-hd7.com/dev/test/api/today')
  }
  const tomorrow = ()=>{
    getdata('https://server.yalla-shoot-hd7.com/dev/test/api/tomorrow')
  }
