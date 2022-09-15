/*Write you JS code here. Solve the problem described under the prices section.
*/

window.addEventListener('load', ()=>{
    const inputs = $('#prices input'),
          span_result = $('#prices p span')
    let result = "_", calc_result = () => {
        result = parseInt(inputs[0].value)*8 + parseInt(inputs[1].value)*5
        span_result.html(result)
    }
    inputs.each((i, elt)=>{
    //   console.log(elt, i)
      elt.addEventListener('change', calc_result)
    })
    sub.addEventListener('click', calc_result)


    
})
