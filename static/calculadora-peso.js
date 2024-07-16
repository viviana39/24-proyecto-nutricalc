(function () {
    const calculate = document.querySelector('#calculateBtn');
    const gender = document.querySelector('#gender');
    const age = document.querySelector('#age');
    const weight = document.querySelector('#weight');
    const height = document.querySelector('#height');
    const activityLevel = document.querySelector('#activity-level');
    const goal = document.querySelector('#goal');
    const resultTable = document.querySelector('#result-table');
    const resultTitle = document.querySelector("#showResult");
    const regexOnlyNumbers = new RegExp(/^(\d+|\d{1,3},\d{1,2}|\d{1,2}.\d{1,2})$/);
    const invalidAge = document.querySelector('#invalidAge');
    const invalidWeight = document.querySelector('#invalidWeight');
    const invalidHeight = document.querySelector('#invalidHeight');
    const invalidForm = document.querySelector('#invalidForm');
    gender.addEventListener('input', (e) => {
        gender.style.border = '1px solid #ced4da';
    })
    activityLevel.addEventListener('input', (e) => {
        activityLevel.style.border = '1px solid #ced4da';
    })
    goal.addEventListener('input', (e) => {
        goal.style.border = '1px solid #ced4da';
    })
    age.addEventListener('input', (e) => {
        e.preventDefault;
        if (!regexOnlyNumbers.test(age.value)) {
            if (age.value || age.value.length > 0) {
                invalidAge.innerText = 'El campo contiene caracteres inválidos';
                invalidAge.style.display = 'block';
                invalidAge.style.color = 'red';
                age.setAttribute('valid', false);
                age.style.border = '1px solid red';
            } else {
                invalidAge.style.display = 'none';
                age.setAttribute('valid', true);
                age.style.border = '1px solid #ced4da';
            }
        } else if (parseInt(age.value) < age.getAttribute('min')) {
            invalidAge.innerText = `La edad indicada está por debajo del mínimo ${age.getAttribute('min')}`;
            invalidAge.style.display = 'block';
            invalidAge.style.color = 'red';
            age.setAttribute('valid', false);
            age.style.border = '1px solid red';
        } else {
            invalidAge.style.display = 'none';
            age.setAttribute('valid', true);
            age.style.border = '1px solid #ced4da';
        }
    })
    weight.addEventListener('input', (e) => {
        e.preventDefault;
        if (!regexOnlyNumbers.test(weight.value)) {
            if (weight.value || weight.value.length > 0) {
                invalidWeight.innerText = 'El campo contiene caracteres inválidos';
                invalidWeight.style.display = 'block';
                invalidWeight.style.color = 'red';
                weight.setAttribute('valid', false);
                weight.style.border = '1px solid red';
            } else {
                invalidWeight.style.display = 'none';
                weight.setAttribute('valid', true);
                weight.style.border = '1px solid #ced4da';
            }
        } else if (parseInt(weight.value) > weight.getAttribute('max')) {
            invalidWeight.innerText = `El límite son ${weight.getAttribute('max')}kg`;
            invalidWeight.style.display = 'block';
            invalidWeight.style.color = 'red';
            weight.setAttribute('valid', false);
            weight.style.border = '1px solid red';
        } else if (parseInt(weight.value) < weight.getAttribute('min')) {
            invalidWeight.innerText = `El mínimo son ${weight.getAttribute('min')}kg`;
            invalidWeight.style.display = 'block';
            invalidWeight.style.color = 'red';
            weight.setAttribute('valid', false);
            weight.style.border = '1px solid red';
        } else {
            invalidWeight.style.display = 'none'
            weight.setAttribute('valid', true);
            weight.style.border = '1px solid #ced4da';
        }
    })
    height.addEventListener('input', (e) => {
        e.preventDefault;
        if (!regexOnlyNumbers.test(height.value)) {
            if (height.value || height.value.length > 0) {
                invalidHeight.innerText = 'El campo contiene caracteres inválidos';
                invalidHeight.style.display = 'block';
                invalidHeight.style.color = 'red';
                height.setAttribute('valid', false);
                height.style.border = '1px solid red';
            } else {
                invalidHeight.style.display = 'none';
                height.setAttribute('valid', true);
                height.style.border = '1px solid #ced4da';
            }
        } else if (parseInt(height.value) > height.getAttribute('max')) {
            invalidHeight.innerText = `El límite son ${height.getAttribute('max')}cm`;
            invalidHeight.style.display = 'block';
            invalidHeight.style.color = 'red';
            height.setAttribute('valid', false);
            height.style.border = '1px solid red';
        } else if (parseInt(height.value) < height.getAttribute('min')) {
            invalidHeight.innerText = `El mínimo son ${height.getAttribute('min')}cm`;
            invalidHeight.style.display = 'block';
            invalidHeight.style.color = 'red';
            height.setAttribute('valid', false);
            height.style.border = '1px solid red';
        } else {
            invalidHeight.style.display = 'none'
            height.setAttribute('valid', true);
            height.style.border = '1px solid #ced4da';
        }
    })
    let levels;
    calculate.addEventListener('click', (e) => {
        resultTable.style.visibility = 'hidden';
        let validate = validateForm();
        if (validate === true) {
            invalidForm.style.display = 'none';
            if (gender.value && age.value && weight.value && height.value && activityLevel.value && goal.value) {
                let genderValue = gender.value;
                let ageValue = parseInt(age.value);
                let weightValue = parseFloat(weight.value.replace(',', '.'));
                let heightValue = parseInt(height.value);
                let activityLevelValue = activityLevel.value;
                let goalValue = goal.value;
                calculate.value = 'Calculando...';
                let result = tmb(genderValue, weightValue, heightValue, ageValue, activityLevelValue);
                setTimeout(() => {
                    //Color ligero
                    resultTable.querySelector('#light .result-type').style.background = '#FFF4A3';
                    resultTable.querySelector('#light .results').style.background = '#FFF4A3';
                    //Color moderado
                    resultTable.querySelector('#moderate .result-type').style.background = '#FFF080';
                    resultTable.querySelector('#moderate .results').style.background = '#FFF080';
                    //Color agresivo
                    resultTable.querySelector('#aggressive .result-type').style.background = '#FFEC5C';
                    resultTable.querySelector('#aggressive .results').style.background = '#FFEC5C';
                    //Color muy agresivo
                    resultTable.querySelector('#very_aggressive .result-type').style.background = '#FFE636';
                    resultTable.querySelector('#very_aggressive .results').style.background = '#FFE636';
                    resultTable.scrollIntoView({ block: "center", behavior: 'smooth' });
                    if (goalValue === "1") {
                        let resultType = 'Superávit';
                        levels = {
                            light: (result * 1.1).toFixed(),
                            moderate: (result * 1.15).toFixed(),
                            aggressive: (result * 1.2).toFixed(),
                            veryAggressive: (result * 1.25).toFixed()
                        }
                        resultTable.querySelector('#light .result-type').innerHTML = `${resultType} ligero`;
                        resultTable.querySelector('#light .results').innerHTML = levels.light;
                        resultTable.querySelector('#moderate').style.visibility = 'visible';
                        resultTable.querySelector('#moderate .result-type').innerHTML = `${resultType} moderado`;
                        resultTable.querySelector('#moderate .results').innerHTML = levels.moderate;
                        resultTable.querySelector('#aggressive').style.visibility = 'visible';
                        resultTable.querySelector('#aggressive .result-type').innerHTML = `${resultType} agresivo`;
                        resultTable.querySelector('#aggressive .results').innerHTML = levels.aggressive;
                        resultTable.querySelector('#very_aggressive').style.visibility = 'visible';
                        resultTable.querySelector('#very_aggressive .result-type').innerHTML = `${resultType} muy agresivo`;
                        resultTable.querySelector('#very_aggressive .results').innerHTML = levels.veryAggressive;
                        resultTitle.innerText = "Tus calorías para estar en superávit calórico:"
                        resultTable.style.visibility = 'visible';
                    } else if (goalValue === "2") {
                        let resultType = 'Déficit';
                        levels = {
                            light: (result * 0.9).toFixed(),
                            moderate: (result * 0.8).toFixed(),
                            aggressive: (result * 0.7).toFixed(),
                            veryAggressive: (result * 0.6).toFixed()
                        }
                        resultTable.querySelector('#light .result-type').innerHTML = `${resultType} ligero`;
                        resultTable.querySelector('#light .results').innerHTML = levels.light;
                        resultTable.querySelector('#moderate').style.visibility = 'visible';
                        resultTable.querySelector('#moderate .result-type').innerHTML = `${resultType} moderado`;
                        resultTable.querySelector('#moderate .results').innerHTML = levels.moderate;
                        resultTable.querySelector('#aggressive').style.visibility = 'visible';
                        resultTable.querySelector('#aggressive .result-type').innerHTML = `${resultType} agresivo`;
                        resultTable.querySelector('#aggressive .results').innerHTML = levels.aggressive;
                        resultTable.querySelector('#very_aggressive').style.visibility = 'visible';
                        resultTable.querySelector('#very_aggressive .result-type').innerHTML = `${resultType} muy agresivo`;
                        resultTable.querySelector('#very_aggressive .results').innerHTML = levels.veryAggressive;
                        resultTitle.innerText = "Tus calorías para estar en déficit calórico:"
                        resultTable.style.visibility = 'visible';
                    } else {
                        let resultType = 'Equilibrio';
                        levels = {
                            light: (result * 1).toFixed()
                        }
                        resultTable.querySelector('#light .result-type').style.background = '#FFE636';
                        resultTable.querySelector('#light .results').style.background = '#FFE636';
                        resultTable.querySelector('#light .result-type').innerHTML = `${resultType} calórico`;
                        resultTable.querySelector('#light .results').innerHTML = levels.light;
                        resultTable.querySelector('#moderate').style.visibility = 'hidden';
                        resultTable.querySelector('#aggressive').style.visibility = 'hidden';
                        resultTable.querySelector('#very_aggressive').style.visibility = 'hidden';
                        resultTitle.innerText = "Tus calorías para estar en balance energético:"
                        resultTable.style.visibility = 'visible';
                    }
                    calculate.value = 'Volver a calcular';
                }, 500);
            }
        } else {
            invalidForm.style.display = 'block';
            calculate.value = 'Volver a intentar';
        }
    })
    function tmb(gender, weight, height, age, activityLevel) {
        let result;
        let rmb = (10 * weight) + (6.25 * height) - (5 * age);
        rmb = gender === "h" ? rmb + 5 : rmb - 161;
        switch (activityLevel) {
            case "ligera":
                result = rmb * 1.375;
                break;
            case "moderada":
                result = rmb * 1.55;
                break;
            case "intensa":
                result = rmb * 1.725;
                break;
            case "muy intensa":
                result = rmb * 1.9;
                break;
            default:
                result = rmb * 1.2;
                break;
        }
        return result;
    }
    function validateForm() {
        let invalidInputs = [];
        let allInputs = document.querySelectorAll('.form-container input');
        let allSelects = document.querySelectorAll('.form-container select');
        allInputs.forEach(input => {
            if (input.getAttribute('valid') === "false" || !input.value || input.value.length < 0 || input.selected) {
                input.style.border = '1px solid red';
                invalidInputs.push(input);
            } else {
                input.style.border = '1px solid #ced4da';
            }
        })
        allSelects.forEach(select => {
            if (select.options[select.selectedIndex].value === 'Selecciona tu sexo' || select.options[select.selectedIndex].value === 'Selecciona una opción') {
                invalidInputs.push(select);
                select.style.border = '1px solid red';
            }
        })
        if (invalidInputs.length > 0) {
            return false;
        } else {
            return true;
        }
    }
})(); 