export default function guardrail(mathFunction) {
  const queue = [];
  try {
    const returnedValue = mathFunction();
    queue.push(returnedValue);
    queue.push('Guardrail was processed');
  } catch (error) {
    queue.push(String(error));
    queue.push('Guardrail was processed');
  }
  return queue;
}
