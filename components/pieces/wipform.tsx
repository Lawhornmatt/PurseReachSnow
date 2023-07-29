export default function WIPForm() {
    return (
        <div className="md:w-2/3">
            <div className="grid grid-cols-1 gap-6">
              <label className="block">
                <span className="text-gray-700">Full name</span>
                <input type="text" className="
                    mt-1
                    block
                    w-full
                    rounded-md
                    border-gray-300
                    shadow-sm
                    focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50
                  " placeholder=""/>
              </label>
              <label className="block">
                <span className="text-gray-700">Email address</span>
                <input type="email" className="
                    mt-1
                    block
                    w-full
                    rounded-md
                    border-gray-300
                    shadow-sm
                    focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50
                  " placeholder="john@example.com"/>
              </label>
              <label className="block">
                <span className="text-gray-700">When is your event?</span>
                <input type="date" className="
                    mt-1
                    block
                    w-full
                    rounded-md
                    border-gray-300
                    shadow-sm
                    focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50
                  "/>
              </label>
 
              <label className="block">
                <span className="text-gray-700">Additional details</span>
                <textarea className="
                    mt-1
                    block
                    w-full
                    rounded-md
                    border-gray-300
                    shadow-sm
                    focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50
                  " rows={3}></textarea>
              </label>
              
            </div>
          </div>
    )
};