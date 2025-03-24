// form event

const frmElement = document.querySelector('form');

// form submit if post
frmElement.addEventListener('submit', function (e) {
  e.preventDefault();
  const ht = parseInt(document.querySelector('#height').value);
  const wt = parseInt(document.querySelector('#weight').value);
  const result = document.querySelector('#results');

  // if (height >= 0 && weight >= 0) {
  //   result.innerHTML()
  // }

  if (ht === '' || ht < 0 || isNaN(ht)) {
    result.innerHTML = 'please give a valid height';
  } else if (wt === '' || wt < 0 || isNaN(wt)) {
    result.innerHTML = 'please give a valid weight';
  } else {
    // calculate bmi
    const bmi = (wt / ((ht * ht) / 10000)).toFixed(2);
    result.innerHTML = `<span> ${bmi}</span>`;
  }
});
