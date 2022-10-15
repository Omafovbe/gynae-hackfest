import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye } from '@fortawesome/free-solid-svg-icons';
import Truncate from 'truncate';
import { Link } from 'react-router-dom';

import Title from '../../../components/sectionTitle/title';
import { eyeDiseases } from '../../../mocks/eye-diseases';
import circles from '../../../images/circles.png';


const AboutBrief = () => {
  return (
    <section className="relative">
      <img src={circles} alt="" className="bg-opacity-50 opacity-50 absolute right-0 object-fit lg:block hidden" />
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 pt-16 xl:mt-12">
        <Title heading="-Education" noted="Quality" title="Well woman Care">
          <p className="font-medium text-gray-600 text-center mt-5 leading-8">
          We take our time to thoroughly diagnose the problem before recommending a treatment option to patients. Our passion is to help women achieve the best possible health so that they can lead happy, healthy and fulfilled lives.
          </p>
        </Title>

        {/* <div className="pt-8"> 
          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-x-4 gap-y-4 h-full">
            {
              eyeDiseases.map((disease) => {
                return (
                  <div key={disease.id} className="sm:col-span-1 h-full">
                    <div className="rounded-lg shadow border group bg-white py-5 px-4">
                      <div className="flex flex-col justify-center items-center sm:items-start sm:justify-start space-y-3">
                        <button type="button" className="bg-primary-700 px-2 py-1 rounded-md focus:outline-none">
                          <FontAwesomeIcon icon={ faEye } className=" text-primary-900" />
                        </button>
                        <h4 className="text-gray-900 text-lg font-bold pt-3">{ disease.name }</h4>
                        <p className="text-gray-500 sm:text-left text-center">{ Truncate(disease.desc, 40) }</p>
                      </div>
                      <div className="text-center pt-7">
                        <Link to={disease.link} className="px-4 py-1 text-primary-900 border border-primary-900 transition-all duration-300 ease-in-out hover:bg-primary-900 hover:text-white rounded font-semibold group-hover:bg-primary-900 group-hover:text-white">
                          More
                        </Link>
                      </div>
                    </div>
                  </div>
                )
              })
            }
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default AboutBrief;