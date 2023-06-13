function Contact() {
  return (
    <>
      <form>
        <label>First Name:</label>
        <input type="text" />
        <label>Last Name:</label>
        <input type="text" />
       
<div className="flex items-center mb-4">
    <input id="default-radio-1" type="radio" value="" name="default-radio" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
    <label for="default-radio-1" className="ml-2 text-sm font-medium">Default radio</label>
</div>
<div className="flex items-center">
    <input checked id="default-radio-2" type="radio" value="" name="default-radio" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
    <label for="default-radio-2" className="ml-2 text-sm font-medium">Checked state</label>
</div>

      </form>
    </>
  );
}

export default Contact;
