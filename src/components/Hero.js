import React from "react";
import { ArrowRight, Check, Shield, Clock, Users } from "lucide-react";

const Hero = () => {
  return (
    <section className="bg-[#f6f6f6] py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Power Your Hospital With Intelligence,
            <br />
            Not Just Software
          </h1>

          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Simplify patient care, operations, and staff coordination — so you
            can focus on healing.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <button className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
              Book Free Demo
            </button>
            <button className="border border-blue-500 text-blue-500 hover:bg-blue-50 px-8 py-3 rounded-lg font-semibold transition-colors">
              Explore Features
            </button>
          </div>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-gray-50 rounded-lg p-8 shadow-lg">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-lg font-semibold text-gray-800">
                Hospital Dashboard
              </h3>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span className="text-sm text-gray-600">Live</span>
              </div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
              <div className="bg-white p-4 rounded-lg text-center">
                <div className="text-2xl font-bold text-blue-500">247</div>
                <div className="text-sm text-gray-600">Patients</div>
              </div>
              <div className="bg-white p-4 rounded-lg text-center">
                <div className="text-2xl font-bold text-orange-500">18</div>
                <div className="text-sm text-gray-600">Pending</div>
              </div>
              <div className="bg-white p-4 rounded-lg text-center">
                <div className="text-2xl font-bold text-green-500">₹2.4L</div>
                <div className="text-sm text-gray-600">Revenue</div>
              </div>
              <div className="bg-white p-4 rounded-lg text-center">
                <div className="text-2xl font-bold text-purple-500">45</div>
                <div className="text-sm text-gray-600">Staff</div>
              </div>
            </div>

            <div className="bg-white rounded-lg p-4">
              <h4 className="font-medium text-gray-700 mb-3">
                Recent Activity
              </h4>
              <div className="space-y-2">
                <div className="flex items-center gap-3 text-sm">
                  <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                  <span className="text-gray-600">
                    Patient registered: John Doe
                  </span>
                  <span className="text-gray-400 ml-auto">2 min ago</span>
                </div>
                <div className="flex items-center gap-3 text-sm">
                  <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                  <span className="text-gray-600">WhatsApp alerts sent</span>
                  <span className="text-gray-400 ml-auto">5 min ago</span>
                </div>
                <div className="flex items-center gap-3 text-sm">
                  <div className="w-2 h-2 bg-orange-400 rounded-full"></div>
                  <span className="text-gray-600">
                    Payment received: ₹15,000
                  </span>
                  <span className="text-gray-400 ml-auto">8 min ago</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 text-center">
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="space-y-2">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto">
                <Check className="w-6 h-6 text-blue-500" />
              </div>
              <h3 className="font-semibold text-gray-800">Easy Setup</h3>
              <p className="text-gray-600 text-sm">Go-live in under 2 weeks</p>
            </div>
            <div className="space-y-2">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto">
                <Shield className="w-6 h-6 text-green-500" />
              </div>
              <h3 className="font-semibold text-gray-800">
                Secure & Compliant
              </h3>
              <p className="text-gray-600 text-sm">End-to-end encryption</p>
            </div>
            <div className="space-y-2">
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mx-auto">
                <Users className="w-6 h-6 text-orange-500" />
              </div>
              <h3 className="font-semibold text-gray-800">Human Support</h3>
              <p className="text-gray-600 text-sm">Dedicated onboarding team</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
