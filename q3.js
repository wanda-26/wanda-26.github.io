function analyzeText() {
    const text = document.getElementById('inputText').value;
  
    const numLetters = (text.match(/[a-zA-Z]/g) || []).length;
    const numWords = (text.trim().match(/\b\w+\b/g) || []).length;
    const numSpaces = (text.match(/ /g) || []).length;
    const numNewlines = (text.match(/\n/g) || []).length;
    const numSpecial = (text.match(/[^a-zA-Z0-9\s]/g) || []).length;
  
    const tokens = text.match(/\b\w+\b/g) || [];
  
    const pronouns = [
      "i", "me", "my", "mine", "myself",
      "we", "us", "our", "ours", "ourselves",
      "you", "your", "yours", "yourself", "yourselves",
      "he", "him", "his", "himself",
      "she", "her", "hers", "herself",
      "it", "its", "itself",
      "they", "them", "their", "theirs", "themselves"
    ];
    const pronounCounts = {};
    pronouns.forEach(p => pronounCounts[p] = 0);
    tokens.forEach(token => {
      const t = token.toLowerCase();
      if (pronounCounts.hasOwnProperty(t)) pronounCounts[t]++;
    });
  
   
    const prepositions = [
      "about", "above", "across", "after", "against", "along", "among", "around", "at",
      "before", "behind", "below", "beneath", "beside", "between", "beyond", "but", "by",
      "concerning", "despite", "down", "during", "except", "for", "from", "in", "inside",
      "into", "like", "near", "of", "off", "on", "onto", "out", "outside", "over", "past",
      "regarding", "since", "through", "throughout", "to", "toward", "under", "underneath",
      "until", "up", "upon", "with", "within", "without"
    ];
    const prepCounts = {};
    prepositions.forEach(p => prepCounts[p] = 0);
    tokens.forEach(token => {
      const t = token.toLowerCase();
      if (prepCounts.hasOwnProperty(t)) prepCounts[t]++;
    });
  
    
    const articles = ["a", "an"];
    const articleCounts = { "a": 0, "an": 0 };
    tokens.forEach(token => {
      const t = token.toLowerCase();
      if (articleCounts.hasOwnProperty(t)) articleCounts[t]++;
    });
  
    let output = `<h3>Basic Counts</h3>
      <ul>
        <li>Letters: ${numLetters}</li>
        <li>Words: ${numWords}</li>
        <li>Spaces: ${numSpaces}</li>
        <li>Newlines: ${numNewlines}</li>
        <li>Special Symbols: ${numSpecial}</li>
      </ul>`;
  
    output += `<h3>Pronoun Counts</h3><ul>`;
    Object.entries(pronounCounts).forEach(([pronoun, count]) => {
      if (count > 0) output += `<li>${pronoun}: ${count}</li>`;
    });
    output += `</ul>`;
  
    output += `<h3>Preposition Counts</h3><ul>`;
    Object.entries(prepCounts).forEach(([prep, count]) => {
      if (count > 0) output += `<li>${prep}: ${count}</li>`;
    });
    output += `</ul>`;
  
    output += `<h3>Indefinite Article Counts</h3><ul>`;
    Object.entries(articleCounts).forEach(([art, count]) => {
      if (count > 0) output += `<li>${art}: ${count}</li>`;
    });
    output += `</ul>`;
  
    document.getElementById('output').innerHTML = output;
  }
  