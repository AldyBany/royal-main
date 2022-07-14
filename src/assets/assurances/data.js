const assuranceData =[
    {id:1,title:"Voiture", icon: <svg className="w-24 h-24" xmlns="http://www.w3.org/2000/svg" id="Layer_1"  viewBox="0 0 128 128"><title>CAR </title><path className="fill-orange-600" d="M113.854,55.4h-8.1a1.75,1.75,0,0,0-1.75,1.75V58.9h-.5a1.753,1.753,0,0,0-1.679,1.254l-.789,2.672-6.395-16.7A8.969,8.969,0,0,0,86.31,40.4H79.521a38.509,38.509,0,0,0,1.627-4.985,50.416,50.416,0,0,0,1.45-13.2,1.751,1.751,0,0,0-1.222-1.631c-7.917-2.505-13.856-4.9-16.692-6.1a1.755,1.755,0,0,0-1.368,0c-2.836,1.2-8.775,3.6-16.692,6.1A1.751,1.751,0,0,0,45.4,22.208a50.412,50.412,0,0,0,1.45,13.2A38.509,38.509,0,0,0,48.479,40.4H41.69a8.969,8.969,0,0,0-8.327,5.729l-6.395,16.7-.789-2.672A1.753,1.753,0,0,0,24.5,58.9H24v-1.75a1.75,1.75,0,0,0-1.75-1.75h-8.1a1.751,1.751,0,0,0-1.75,1.75v6.375a1.75,1.75,0,0,0,1.75,1.75h8.1a1.742,1.742,0,0,0,1.524-.905l1.1,3.708L18.547,79.666c-.007.013-.01.032-.016.045a1.737,1.737,0,0,0-.2.793V96.519a5.184,5.184,0,0,0,4.864,5.159v5.756a6.237,6.237,0,0,0,6.23,6.229h6.885a6.236,6.236,0,0,0,6.229-6.229v-5.723H85.459v5.723a6.236,6.236,0,0,0,6.229,6.229h6.885a6.237,6.237,0,0,0,6.23-6.229v-5.756a5.184,5.184,0,0,0,4.864-5.159V80.5a1.724,1.724,0,0,0-.2-.805.318.318,0,0,0-.009-.033L103.13,68.074l1.1-3.708a1.743,1.743,0,0,0,1.524.905h8.1a1.75,1.75,0,0,0,1.75-1.75V57.146A1.751,1.751,0,0,0,113.854,55.4ZM20.5,61.771H15.9V58.9h4.6ZM98.992,86.307a4.052,4.052,0,1,1-4.053-4.053A4.057,4.057,0,0,1,98.992,86.307ZM23.031,78.754l4.762-8.73h72.414l4.762,8.73Zm54.64,3.5L76.647,85.24H51.353l-1.024-2.986ZM37.112,86.307a4.052,4.052,0,1,1-4.051-4.053A4.056,4.056,0,0,1,37.112,86.307ZM89.979,60.524H38.021L42.092,49.9H54.656a24.965,24.965,0,0,0,8.717,5.579,1.753,1.753,0,0,0,1.254,0A24.965,24.965,0,0,0,73.344,49.9H85.909ZM64,17.986c2.934,1.225,8.23,3.319,15.106,5.54a47.039,47.039,0,0,1-1.35,11.023c-2.2,8.667-6.829,14.52-13.756,17.408-6.927-2.888-11.553-8.741-13.756-17.408a47.028,47.028,0,0,1-1.35-11.023C55.77,21.305,61.066,19.211,64,17.986ZM36.631,47.376A5.451,5.451,0,0,1,41.69,43.9h8.444a27.878,27.878,0,0,0,1.57,2.5H41.69a2.929,2.929,0,0,0-2.723,1.875L33.843,61.648a1.749,1.749,0,0,0,1.634,2.376H92.523a1.749,1.749,0,0,0,1.634-2.376L89.035,48.272A2.935,2.935,0,0,0,86.31,46.4H76.3a27.878,27.878,0,0,0,1.57-2.5H86.31a5.451,5.451,0,0,1,5.059,3.48L98.7,66.524H29.3Zm2.41,60.058a2.733,2.733,0,0,1-2.729,2.729H29.427a2.733,2.733,0,0,1-2.73-2.729v-5.723H39.041Zm59.532,2.729H91.688a2.733,2.733,0,0,1-2.729-2.729v-5.723H101.3v5.723A2.733,2.733,0,0,1,98.573,110.163Zm7.594-13.644a1.694,1.694,0,0,1-1.692,1.692H23.525a1.694,1.694,0,0,1-1.692-1.692V82.254H26.7a7.552,7.552,0,1,0,12.724,0h7.207l1.818,5.3A1.749,1.749,0,0,0,50.1,88.74H77.9a1.749,1.749,0,0,0,1.656-1.183l1.818-5.3h7.207a7.552,7.552,0,1,0,12.724,0h4.865ZM112.1,61.771h-4.6V58.9h4.6Z"/><path className="fill-orange-600" d="M60.651,39.163a1.747,1.747,0,0,0,1.251.527h0a1.748,1.748,0,0,0,1.25-.525l8.36-8.537a1.75,1.75,0,1,0-2.5-2.449l-7.108,7.258L58.989,32.45a1.75,1.75,0,1,0-2.5,2.445Z"/></svg>},
    {id:2,title:"Famille", icon: <svg className="w-24 h-24" xmlns="http://www.w3.org/2000/svg"  version="1.1" viewBox="0 0 492 492" >
    <g id="Master_Layer_2">
    </g>
    <g id="Layer_1">
        <g>
            <g>
                <g>
                    <g>
                        <g>
                            <g>
                                <g>
                                    <path className="fill-orange-600" d="M116.792,221.509          c-16.128,0-29.256-13.128-29.256-29.256s13.128-29.256,29.256-29.256s29.256,13.128,29.256,29.256          S132.92,221.509,116.792,221.509L116.792,221.509z M116.792,174.517c-9.792,0-17.736,7.968-17.736,17.736          s7.968,17.736,17.736,17.736s17.736-7.968,17.736-17.736S126.56,174.517,116.792,174.517z"/>
                                </g>
                            </g>
                            <g>
                                <g>
                                    <g>
                                        <path className="fill-orange-600"  d="M90.032,319.261H79.568           c-9.72,0-17.616-7.896-17.616-17.616v-55.056c0-9.192,7.464-16.656,16.656-16.656h67.8c6.528,0,12.72,2.856,16.992,7.8           l47.808,56.088c2.064,2.424,1.776,6.048-0.648,8.112c-2.424,2.064-6.048,1.776-8.112-0.648l-47.808-56.088           c-2.064-2.4-5.064-3.768-8.232-3.768l-67.824,0c-2.832,0-5.136,2.304-5.136,5.136v55.056c0,3.36,2.736,6.096,6.096,6.096           h10.464c3.192,0,5.76,2.568,5.76,5.76C95.768,316.669,93.2,319.261,90.032,319.261z"/>
                                    </g>
                                </g>
                                <g>
                                    <g>
                                        <path className="fill-orange-600"   d="M140.288,410.749H97.976c-3,0-5.496-2.304-5.736-5.28           l-7.488-89.28c-0.024-0.168-0.024-0.312-0.024-0.48v-51.696c0-3.192,2.568-5.76,5.76-5.76c3.192,0,5.76,2.568,5.76,5.76           v51.456l7.032,83.76l31.728,0l7.032-83.76v-51.456c0-2.328,1.416-4.44,3.576-5.328s4.656-0.384,6.288,1.296l43.824,44.496           c2.232,2.256,2.208,5.904-0.072,8.136c-2.256,2.232-5.904,2.208-8.136-0.072l-33.96-34.488v37.632           c0,0.168,0,0.312-0.024,0.48l-7.488,89.28C145.76,408.469,143.288,410.749,140.288,410.749z"/>
                                    </g>
                                </g>
                                <g>
                                    <g>
                                        <path className="fill-orange-600"  d="M119,410.749c-3.192,0-5.76-2.568-5.76-5.76v-60.912           c0-3.192,2.568-5.76,5.76-5.76s5.76,2.568,5.76,5.76v60.912C124.76,408.181,122.168,410.749,119,410.749z"/>
                                    </g>
                                </g>
                            </g>
                        </g>
                        <g>
                            <g>
                                <g>
                                    <path className="fill-orange-600"  d="M372.68,221.509c-16.128,0-29.256-13.128-29.256-29.256          s13.128-29.256,29.256-29.256c16.128,0,29.256,13.128,29.256,29.256S388.808,221.509,372.68,221.509L372.68,221.509z           M372.68,174.517c-9.792,0-17.736,7.968-17.736,17.736s7.968,17.736,17.736,17.736c9.768,0,17.736-7.968,17.736-17.736          S382.448,174.517,372.68,174.517z"/>
                                </g>
                            </g>
                            <g>
                                <g>
                                    <g>
                                        <path className="fill-orange-600"  d="M412.952,319.261h-5.04c-3.192,0-5.76-2.568-5.76-5.76           c0-3.192,2.568-5.76,5.76-5.76l5.04,0c3.216,0,5.832-2.472,6.096-5.616l-10.944-54.408c-0.072-0.384-0.12-0.744-0.12-1.128           c0-2.832-2.304-5.136-5.136-5.136l-56.736,0c-3.072,0-5.976,1.296-8.016,3.552l-38.448,58.2           c-1.752,2.664-5.328,3.384-7.992,1.632s-3.384-5.328-1.632-7.992l38.664-58.536c0.144-0.192,0.288-0.384,0.432-0.576           c4.248-4.968,10.44-7.8,16.992-7.8h56.736c8.976,0,16.296,7.128,16.632,16.008l10.968,54.552           c0.072,0.384,0.12,0.744,0.12,1.128C430.568,311.341,422.672,319.261,412.952,319.261z"/>
                                    </g>
                                </g>
                                <g>
                                    <g>
                                        <path className="fill-orange-600"  d="M389,410.749h-31.248c-2.856,0-5.28-2.088-5.688-4.92           l-8.136-55.752l-11.592,0.048h-0.024c-1.704,0-3.312-0.744-4.416-2.064c-1.104-1.32-1.56-3.048-1.248-4.728l9.024-50.256           l-21.024,22.248c-2.184,2.304-5.832,2.424-8.136,0.24c-2.304-2.184-2.424-5.832-0.24-8.136l34.296-36.264           c1.752-1.848,4.512-2.328,6.792-1.176c2.28,1.152,3.528,3.648,3.072,6.168l-11.208,62.448l9.696-0.024h0.024           c2.856,0,5.28,2.088,5.688,4.92l8.136,55.776l21.288,0l8.112-55.56c0.408-2.832,2.832-4.92,5.688-4.92c0,0,0,0,0.024,0           l11.544,0.024l-18.456-62.088c-0.912-3.048,0.84-6.264,3.888-7.152c3.048-0.912,6.264,0.84,7.152,3.888l20.64,69.456           c0.528,1.752,0.192,3.624-0.912,5.088c-1.08,1.464-2.808,2.304-4.608,2.304c0,0,0,0-0.024,0l-14.304-0.048l-8.112,55.56           C394.28,408.661,391.856,410.749,389,410.749z"/>
                                    </g>
                                </g>
                            </g>
                            <g>
                                <g>
                                    <path className="fill-orange-600" d="M372.944,410.749c-3.192,0-5.76-2.568-5.76-5.76          v-58.152c0-3.192,2.568-5.76,5.76-5.76s5.76,2.568,5.76,5.76v58.152C378.704,408.181,376.136,410.749,372.944,410.749z"/>
                                </g>
                            </g>
                        </g>
                        <g>
                            <g>
                                <g>
                                    <path className="fill-orange-600"  d="M249.296,268.885c-12.96,0-23.496-10.536-23.496-23.496          s10.536-23.496,23.496-23.496c12.96,0,23.496,10.536,23.496,23.496C272.816,258.325,262.256,268.885,249.296,268.885          L249.296,268.885z M249.296,233.389c-6.6,0-11.976,5.376-11.976,11.976c0,6.6,5.376,11.976,11.976,11.976          s11.976-5.376,11.976-11.976C261.272,238.765,255.92,233.389,249.296,233.389z"/>
                                </g>
                            </g>
                            <g>
                                <g>
                                    <path className="fill-orange-600" d="M263.648,410.749h-27.912          c-3.192,0-5.76-2.568-5.76-5.76s2.568-5.76,5.76-5.76h27.912c3.192,0,5.76,2.568,5.76,5.76S266.84,410.749,263.648,410.749z          "/>
                                </g>
                            </g>
                            <g>
                                <g>
                                    <path className="fill-orange-600"  d="M266.432,410.749c-0.12,0-0.24,0-0.336,0          c-3.168-0.192-5.592-2.904-5.4-6.096l3.264-55.512l2.016-41.784c0.096-1.92,1.152-3.672,2.808-4.656          c1.656-0.984,3.696-1.08,5.448-0.264l32.424,15.48c0.216,0.096,0.456,0.048,0.624-0.12l0.528-0.528          c0.264-0.264,0.288-0.576,0.264-0.768c-0.024-0.216-0.12-0.48-0.408-0.696L264.92,286.31c-0.864-0.6-1.848-0.912-2.88-0.912          l-26.976-0.001c-1.08,0-2.112,0.336-2.976,0.96l-37.104,26.808c-0.672,0.48-0.84,1.152-0.888,1.488          c-0.048,0.36-0.048,1.032,0.48,1.656c0.096,0.12,0.264,0.144,0.384,0.096l30.288-14.016c1.728-0.816,3.768-0.696,5.4,0.312          c1.632,0.984,2.688,2.736,2.76,4.656l2.016,41.784l3.264,55.512c0.192,3.168-2.232,5.904-5.4,6.096          c-3.168,0.192-5.904-2.232-6.096-5.4l-3.288-55.536c0-0.024,0-0.048,0-0.072l-1.608-33.264l-22.536,10.416          c-4.872,2.256-10.656,0.936-14.088-3.192c-2.4-2.904-3.528-6.72-3.048-10.464c0.48-3.744,2.496-7.176,5.568-9.384          l37.104-26.808c2.856-2.064,6.216-3.144,9.72-3.144l26.904,0c3.384,0,6.648,1.008,9.432,2.928l42.744,29.496          c3.024,2.088,4.968,5.376,5.328,9.024c0.36,3.648-0.888,7.272-3.432,9.912l-0.528,0.528c-3.6,3.744-9.192,4.776-13.896,2.52          l-24.6-11.76l-1.608,33.168c0,0.024,0,0.048,0,0.072l-3.288,55.536C272,408.397,269.456,410.749,266.432,410.749z"/>
                                </g>
                            </g>
                            <g>
                                <g>
                                    <path className="fill-orange-600"  d="M249.704,410.749c-3.192,0-5.76-2.568-5.76-5.76v-42.96          c0-3.192,2.568-5.76,5.76-5.76c3.192,0,5.76,2.568,5.76,5.76v42.96C255.464,408.181,252.872,410.749,249.704,410.749z"/>
                                </g>
                            </g>
                        </g>
                    </g>
                    <path className="fill-orange-600"  d="M298.568,92.797c-13.44-13.296-35.232-13.44-48.864-0.408      c-13.632-13.032-35.424-12.888-48.864,0.408l0,0c-6.6,6.528-10.248,15.216-10.248,24.456s3.648,17.928,10.248,24.456      l44.808,44.328c1.128,1.104,2.592,1.656,4.056,1.656s2.928-0.552,4.056-1.656l44.807-44.303      c6.6-6.528,10.248-15.216,10.248-24.456C308.816,108.038,305.168,99.349,298.568,92.797L298.568,92.797z M290.456,133.549      l-40.776,40.32l-40.776-40.32c-4.392-4.344-6.816-10.128-6.816-16.272c0-6.144,2.424-11.928,6.816-16.272      c9.12-9.024,23.976-9.024,33.096,0l3.624,3.576c2.256,2.208,5.856,2.208,8.112,0l3.624-3.576c9.12-9.024,23.976-9.024,33.096,0      c4.392,4.344,6.816,10.128,6.816,16.272C297.271,123.422,294.872,129.182,290.456,133.549z"/>
                </g>
            </g>
        </g>
    </g>
    </svg>},
    {id:3,title:"Sante", icon:<svg className="h-24 w-24" xmlns="http://www.w3.org/2000/svg" id="Layer_1"  viewBox="0 0 128 128"><title>HEART BEAT</title><path className="fill-orange-600" d="M113.854,64.046H102.2l.484-.483A21.724,21.724,0,0,0,71.961,32.841L64,40.8l-7.961-7.961A21.724,21.724,0,1,0,25.316,63.563l.484.483H14.146a1.75,1.75,0,0,0,0,3.5H29.3l33.463,33.463a1.748,1.748,0,0,0,2.474,0L98.7,67.546h15.154a1.75,1.75,0,0,0,0-3.5ZM27.791,61.088A18.224,18.224,0,0,1,53.564,35.315l9.2,9.2a1.8,1.8,0,0,0,2.474,0l9.2-9.2a18.224,18.224,0,0,1,25.773,25.773l-2.958,2.958H77.833a1.751,1.751,0,0,0-1.552.942l-2.7,5.188L68.761,57.533a1.751,1.751,0,0,0-1.636-1.127h-.009a1.751,1.751,0,0,0-1.633,1.142l-5.31,14.357L54.956,51.527a1.75,1.75,0,0,0-3.328-.2l-4.9,12.714H30.749ZM64,97.3,34.249,67.546H47.93a1.748,1.748,0,0,0,1.632-1.12L52.924,57.7l5.249,20.5a1.75,1.75,0,0,0,1.6,1.313c.031,0,.062,0,.092,0a1.75,1.75,0,0,0,1.641-1.142l5.639-15.245,4.544,11.929a1.753,1.753,0,0,0,1.535,1.124,1.729,1.729,0,0,0,1.653-.939l4.014-7.7H93.751Z"/></svg>},
    {id:4,title:"Voyage", icon:<svg className="w-24 h-24" xmlns="http://www.w3.org/2000/svg" id="Travel_Abroad" viewBox="0 0 512 512"><title>Travel_Abroad</title><g id="Travel_Abroad-2" ><path className="fill-orange-600" d="M444.62,113.5855l.2394-.2327c14.0249-14.0353,14.4771-36.4088,1.008-49.8817a33.6924,33.6924,0,0,0-24.0132-9.8354,36.4316,36.4316,0,0,0-25.8723,10.8424L365.1965,97.3756,255.0858,64.4116,232.263,87.2411a15.1989,15.1989,0,0,0,0,21.51l1,1,79.534,43.77L301.16,166.15a159.389,159.389,0,0,0-86.4728-25.5427,161.2907,161.2907,0,0,0-17.6995,1.0013l-.5519-.6118c-.2594.2327-.552.495-.8379.761-66.101,7.84-120.5075,55.98-135.65,122.45A158.8173,158.8173,0,0,0,179.5418,454.3648a159.5887,159.5887,0,0,0,35.4141,4c74.537,0,138.1709-50.8156,154.7427-123.577a159.7552,159.7552,0,0,0,3.9862-39.0517,17.8816,17.8816,0,0,0-.6584-10.8965,158.0211,158.0211,0,0,0-23.7338-69.9076c-1.6426-2.6106-3.3716-5.1509-5.15-7.6342l11.8133-10.89L400.0824,276.58l1.0108,1.008a15.2026,15.2026,0,0,0,21.4824-.0038l22.8361-22.8323L412.2282,143.89ZM138.0354,409.2208l-2.6135,4.2959A139.0154,139.0154,0,0,1,77.5508,278.535c8.8939,2.3977,17.8752,5.9384,21.3227,8.4027-.1292.9177-.2726,1.8487-.4151,2.7759C97.1246,298.369,95.11,311.443,105.7667,319.2c9.3262,6.783,17.8619.4389,21.755-2.84,1.5628,1.2607,3.2652,2.5137,5.0179,3.8077,2.7332,2.0149,7.5544,5.5726,9.2863,7.7367-.5482,1.9124-1.3566,4.1734-2.1442,6.3746-3.096,8.6449-6.2975,17.5788-.3391,23.8563,2.0548,2.527,8.1956,14.1417,9.765,18.3246-.0332,1.3927.07,2.9792.2033,5.0435a58.1559,58.1559,0,0,1,.133,8.8778C149.4335,390.3784,137.3371,405.6136,138.0354,409.2208Zm76.9205,29.1906A139.8223,139.8223,0,0,1,148.6687,421.64c9.7356-8.2327,18.1612-21.4567,18.2875-21.67,2.9526-4.9875,2.7835-11.6109,2.2582-19.7534-.0865-1.3632-.1862-2.5336-.1663-3.2851a5.1811,5.1811,0,0,1-.1634,1.1068c1.6-7.0784-8.0227-23.3747-12.6511-30.3174.4788-1.8354,1.4962-4.6749,2.2239-6.7164a90.65,90.65,0,0,0,3.2025-10.1612c2.7493-11.96-8.3591-20.1524-17.2834-26.733a60.2841,60.2841,0,0,1-6.3479-5.0569c-4.0166-4.236-10.7825-7.505-20.6549-.1568.1767-2.1108.5453-4.502.798-6.1512.3325-2.1479.6555-4.2921.8617-6.3574,1.1466-11.5739-11.3487-20.7613-37.0738-27.3343a137.9391,137.9391,0,0,1,96.6578-93.8049,64.3087,64.3087,0,0,0-4.3957,17.4524c-.4294,3.8741-.9842,7.3815-1.4734,10.4709-1.9513,12.3319-4.1658,26.31,13.546,34.1971a64.3835,64.3835,0,0,0,21.8092,5.5927,53.8235,53.8235,0,0,1,6.47.9348c.6014,2.9992.2195,9.16.0627,11.6907-.2194,3.534-.455,7.3444.6755,10.54,1.4592,8.0665,8.5082,37.5422,35.92,56.5545a44.8878,44.8878,0,0,1-13.1832,5.473c-2.3075.4427-4.6721.7381-6.96,1.024-9.3594,1.1743-22.1777,2.7731-27.54,17.556-2.3845,6.5342-.8379,11.2918.8807,14.1313,4.2693,7.0594,12.5751,8.1728,18.64,8.9841.9776.13,2.3513.3164,3.1759.4788,3.7534,2.75,15.4707,10.5375,27.6174,10.5375a23.6,23.6,0,0,0,16.036-5.9556c1.9988-1.6958,11.4751-1.5856,16.037-1.5257,9.6558.113,18.7729.2261,24.5917-5.6563a14.6894,14.6894,0,0,0,4.2161-10.9354c-.2062-8.3325,15.7434-17.2938,28.5617-24.4958,3.0923-1.7356,6.2539-3.5207,9.3262-5.3732q-.8622,6.7231-2.3836,13.4235A138.1154,138.1154,0,0,1,214.9559,438.4114ZM332.4054,225.5449a138.1163,138.1163,0,0,1,21.1232,66.0877c-2.8927,3.6642-13.4292,9.5893-19.9965,13.2762-17.16,9.6425-36.4582,20.4858-38.5529,38.41-2.5137.2034-6.1351.153-8.798.1236-10.2182-.1131-21.7692-.2632-29.45,6.49-3.3212,2.9155-13.4292-1.5732-19.2014-6.0715-3.2319-2.5241-7.0955-3.1388-11.1957-3.6946a63.6046,63.6046,0,0,1,7.2352-1.18c2.48-.3126,5.2934-.6622,8.2393-1.2274,8.9443-1.7158,32.2525-11.5008,34.1943-24.4321a12.4042,12.4042,0,0,0-6.7925-13.017c-29.6922-15.6873-34.2475-47.3983-34.4242-48.6979l-.3486-2.8034c.0361-.6584.08-1.37.1159-1.9817.5918-9.5162,1.6891-27.2318-12.2892-31.5106a60.7687,60.7687,0,0,0-12.066-2.1916,44.5848,44.5848,0,0,1-15.7709-3.9663c-2.414-1.0745-2.9156-1.7822-2.9156-1.7822-.6089-1.2474.2926-6.9264.951-11.0722.5253-3.3117,1.1172-7.0624,1.5988-11.4048,1.2939-11.6708,5.9955-18.999,10.48-23.9533,3.3583-.2394,6.7365-.3895,10.1517-.3895a139.5721,139.5721,0,0,1,72.7339,20.502l-.9975,1.081a49.1105,49.1105,0,0,0-4.7775,5.5993l-35.6706-9.234L230.3412,194.15a13.91,13.91,0,0,0-.0038,19.68l1.121,1.1238,41.0865,20.8516,1.4763,1.4762,20.8516,41.0933,1.1238,1.1209a13.9123,13.9123,0,0,0,19.6774.0067l15.65-15.6446-9.4231-36.4021a48.2992,48.2992,0,0,0,5.2868-4.5353l2.1346-1.9646C330.3667,222.4659,331.4174,223.9755,332.4054,225.5449Zm90.4761,23.5106-9.7888,9.7888-51.9365-94.373-47.6235,43.9061-.2831.27a27.5271,27.5271,0,0,1-7.2618,5.2431l-7.2751,3.591,10.4443,40.3294-1.5561,1.5561-17.2273-33.9454-5.9651-5.9717-33.9416-17.22,1.5533-1.5532,39.747,10.2913,3.5511-7.3948a27.5194,27.5194,0,0,1,5.36-7.4784l44.043-47.7736L250.9856,96.7344l9.7888-9.7926,110.5468,33.09L410.19,78.4868a16.6009,16.6009,0,0,1,11.6641-4.9011,13.8764,13.8764,0,0,1,9.9047,3.99c5.663,5.6621,5.2469,15.3083-.9044,21.566l-41.2832,38.6165Z"/></g></svg>},
    {id:5,title:"Maladie", icon:   <svg className="w-24 h-24" xmlns="http://www.w3.org/2000/svg" width="151.949" height="146.371" viewBox="0 0 151.949 146.371">
    <g >
      <polygon  points="60.457 73.174 52.583 73.174 52.583 65.3 41.209 65.3 41.209 73.174 33.334 73.174 33.334 84.548 41.209 84.548 41.209 92.422 52.583 92.422 52.583 84.548 60.457 84.548 60.457 73.174" fill="none" stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4"/>
      <path  d="M143.239,93.539v18.235H125.293a17.9,17.9,0,0,0-20.413,0H43.539a17.9,17.9,0,0,0-20.413,0H8.71V59.449A9.984,9.984,0,0,1,18.7,49.465h80.47A44.075,44.075,0,0,1,143.239,93.539Z" fill="none" stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4"/>
      <path d="M102.546,59.449V85.571h30.436C131.784,73.588,117.764,58.185,102.546,59.449Z" fill="none" stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4"/>
      <path className="text-orange-600" d="M51.231,126.472a17.9,17.9,0,1,1-7.692-14.7A17.895,17.895,0,0,1,51.231,126.472Z" fill="none" stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4"/>
      <path d="M132.985,126.472a17.9,17.9,0,1,1-7.692-14.7A17.9,17.9,0,0,1,132.985,126.472Z" fill="none" stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4"/>
      <path d="M9.188,111.774H23.126a17.876,17.876,0,0,0-7.685,14.7H9.188A7.192,7.192,0,0,1,2,119.284v-.323A7.191,7.191,0,0,1,9.188,111.774Z" fill="none" stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4"/>
      <path d="M104.88,111.774a17.879,17.879,0,0,0-7.686,14.7H51.231a17.866,17.866,0,0,0-7.692-14.7Z" fill="none" stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4"/>
      <path  d="M149.949,118.961v.323a7.192,7.192,0,0,1-7.188,7.188h-9.776a17.866,17.866,0,0,0-7.692-14.7h17.468A7.191,7.191,0,0,1,149.949,118.961Z" fill="none" stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4"/>
      <path  d="M90.209,29.971h6.87a7.175,7.175,0,0,1,7.175,7.174h0v10.4H83.034v-10.4a7.174,7.174,0,0,1,7.175-7.174Z" fill="none" stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4"/>
      <line x1="60.457" y1="24.418" x2="76.115" y2="33.365" fill="none" stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4"/>
      <line x1="126.831" y1="24.418" x2="111.173" y2="33.365" fill="none" stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4"/>
      <line x1="93.577" y1="2" x2="93.711" y2="20.033" fill="none" stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4"/>
    </g>
  </svg>},
    {id:6,title:"Retraite", icon:<svg className="w-24 h-24" xmlns="http://www.w3.org/2000/svg" id="Layer_1" viewBox="0 0 128 128"><title>LIFE INSURANCE</title><path className="fill-orange-600" d="M104.644,89.192a1.75,1.75,0,0,0-1.222-1.631c-6.161-1.949-10.77-3.807-12.969-4.74a1.755,1.755,0,0,0-1.368,0c-2.2.934-6.811,2.792-12.969,4.74A1.743,1.743,0,0,0,75,88.631a27.355,27.355,0,0,0-3.272-1.185A13.769,13.769,0,0,0,65.75,62.383V41.069a10.928,10.928,0,0,1,9.17,10.766,1.75,1.75,0,0,0,3.5,0,10.917,10.917,0,0,1,21.83-.274,1.751,1.751,0,0,0,1.749,1.7h.039a1.751,1.751,0,0,0,1.712-1.78,39.756,39.756,0,0,0-79.5,0,1.751,1.751,0,0,0,1.712,1.78H26a1.751,1.751,0,0,0,1.749-1.7,10.916,10.916,0,0,1,21.761-.938c0,.055.007.11.014.165h0a8.5,8.5,0,0,1,.057,1.047,1.75,1.75,0,0,0,3.5,0,10.928,10.928,0,0,1,9.17-10.766V62.383a13.769,13.769,0,0,0-5.988,25.058,27.563,27.563,0,0,0-19.781,26.4,1.751,1.751,0,0,0,1.75,1.75H89.769a1.785,1.785,0,0,0,.334-.034,1.386,1.386,0,0,0,.134-.038c.053-.015.107-.025.159-.044.014-.006.028-.013.042-.018l.023-.01c6.629-2.567,11.018-7.9,13.042-15.869A39.659,39.659,0,0,0,104.644,89.192ZM98.318,40.518a14.453,14.453,0,0,0-20.23,2.319c-.681-7.883-2.72-19.661-8.738-26.526A36.568,36.568,0,0,1,98.318,40.518Zm-59.658-3.1a14.381,14.381,0,0,0-8.978,3.1A36.568,36.568,0,0,1,58.65,16.311c-6.01,6.857-8.052,18.614-8.736,26.5A14.379,14.379,0,0,0,38.66,37.416Zm14.872,4.515C54.393,33.327,56.874,20.905,64,16.2c7.125,4.708,9.607,17.13,10.468,25.734a14.392,14.392,0,0,0-20.936,0Zm.184,34.111A10.284,10.284,0,1,1,64,86.326,10.3,10.3,0,0,1,53.716,76.042ZM64,89.826a24.026,24.026,0,0,1,10.958,2.653,38.112,38.112,0,0,0,1.076,7.1c1.37,5.39,3.828,9.573,7.325,12.513H40.044A24.051,24.051,0,0,1,64,89.826Zm36.111,8.893c-1.669,6.565-5.147,11.015-10.342,13.238-5.2-2.223-8.674-6.673-10.342-13.238a36.088,36.088,0,0,1-1.037-8.212c5.128-1.665,9.1-3.229,11.379-4.177,2.277.947,6.249,2.511,11.379,4.177A36.1,36.1,0,0,1,100.111,98.719Z"/><path className="fill-orange-600" d="M86.142,96.909a1.75,1.75,0,0,0-2.5,2.445l3.246,3.326a1.75,1.75,0,0,0,1.251.527h0a1.75,1.75,0,0,0,1.25-.525L95.9,96.031a1.75,1.75,0,1,0-2.5-2.449l-5.259,5.372Z"/></svg>},
    {id:7,title:"Habitation", icon: <svg className="w-24 h-24" xmlns="http://www.w3.org/2000/svg" id="Layer_1" viewBox="0 0 128 128"><title>BUILDING</title><path className="fill-orange-600" d="M113.854,112.1h-5.8V23.235a1.751,1.751,0,0,0-1.75-1.75H87.25V14.146a1.75,1.75,0,0,0-3.5,0v7.339h-17.3V14.146A1.75,1.75,0,0,0,64.7,12.4h-43a1.751,1.751,0,0,0-1.75,1.75V112.1h-5.8a1.75,1.75,0,0,0,0,3.5h99.708a1.75,1.75,0,0,0,0-3.5Zm-9.3-87.119V112.1H96.2V38.732a1.75,1.75,0,0,0-1.75-1.75h-28v-12Zm-39.863,15.5H92.7V112.1H56.448V40.482ZM23.448,15.9h39.5V36.982H54.7a1.751,1.751,0,0,0-1.75,1.75V112.1h-29.5Z"/><path className="fill-orange-600" d="M31.667,31.75H54.7A1.749,1.749,0,0,0,56.448,30V23.235a1.75,1.75,0,0,0-1.75-1.75H31.667a1.75,1.75,0,0,0-1.75,1.75V30A1.749,1.749,0,0,0,31.667,31.75Zm1.75-6.765H52.948V28.25H33.417Z"/><path className="fill-orange-600" d="M43.183,36.982H31.667a1.75,1.75,0,0,0-1.75,1.75V45.5a1.749,1.749,0,0,0,1.75,1.75H43.183a1.75,1.75,0,0,0,1.75-1.75V38.732A1.751,1.751,0,0,0,43.183,36.982Zm-1.75,6.765H33.417V40.482h8.016Z"/><path className="fill-orange-600" d="M43.183,52.48H31.667a1.75,1.75,0,0,0-1.75,1.75v6.764a1.749,1.749,0,0,0,1.75,1.75H43.183a1.75,1.75,0,0,0,1.75-1.75V54.23A1.751,1.751,0,0,0,43.183,52.48Zm-1.75,6.764H33.417V55.98h8.016Z"/><path className="fill-orange-600" d="M43.183,67.978H31.667a1.749,1.749,0,0,0-1.75,1.75v6.764a1.749,1.749,0,0,0,1.75,1.75H43.183a1.75,1.75,0,0,0,1.75-1.75V69.728A1.75,1.75,0,0,0,43.183,67.978Zm-1.75,6.764H33.417V71.478h8.016Z"/><path className="fill-orange-600" d="M43.183,83.475H31.667a1.749,1.749,0,0,0-1.75,1.75v6.764a1.749,1.749,0,0,0,1.75,1.75H43.183a1.75,1.75,0,0,0,1.75-1.75V85.225A1.75,1.75,0,0,0,43.183,83.475Zm-1.75,6.764H33.417V86.975h8.016Z"/><path className="fill-orange-600" d="M64,56.667h7.25A1.75,1.75,0,0,0,73,54.917v-7.25a1.75,1.75,0,0,0-1.75-1.75H64a1.75,1.75,0,0,0-1.75,1.75v7.25A1.75,1.75,0,0,0,64,56.667Zm1.75-7.25H69.5v3.75H65.75Z"/><path className="fill-orange-600" d="M78.25,56.667H85.5a1.75,1.75,0,0,0,1.75-1.75v-7.25a1.75,1.75,0,0,0-1.75-1.75H78.25a1.75,1.75,0,0,0-1.75,1.75v7.25A1.75,1.75,0,0,0,78.25,56.667ZM80,49.417h3.75v3.75H80Z"/><path className="fill-orange-600" d="M64,71.478h7.25A1.751,1.751,0,0,0,73,69.728v-7.25a1.75,1.75,0,0,0-1.75-1.75H64a1.75,1.75,0,0,0-1.75,1.75v7.25A1.751,1.751,0,0,0,64,71.478Zm1.75-7.25H69.5v3.75H65.75Z"/><path className="fill-orange-600" d="M78.25,71.478H85.5a1.751,1.751,0,0,0,1.75-1.75v-7.25a1.75,1.75,0,0,0-1.75-1.75H78.25a1.75,1.75,0,0,0-1.75,1.75v7.25A1.751,1.751,0,0,0,78.25,71.478ZM80,64.228h3.75v3.75H80Z"/><path className="fill-orange-600" d="M64,86.288h7.25A1.75,1.75,0,0,0,73,84.538v-7.25a1.75,1.75,0,0,0-1.75-1.75H64a1.75,1.75,0,0,0-1.75,1.75v7.25A1.75,1.75,0,0,0,64,86.288Zm1.75-7.25H69.5v3.75H65.75Z"/><path className="fill-orange-600" d="M78.25,86.288H85.5a1.75,1.75,0,0,0,1.75-1.75v-7.25a1.75,1.75,0,0,0-1.75-1.75H78.25a1.75,1.75,0,0,0-1.75,1.75v7.25A1.75,1.75,0,0,0,78.25,86.288ZM80,79.038h3.75v3.75H80Z"/><path className="fill-orange-600" d="M64,101.1h7.25A1.751,1.751,0,0,0,73,99.349V92.1a1.75,1.75,0,0,0-1.75-1.75H64a1.75,1.75,0,0,0-1.75,1.75v7.25A1.751,1.751,0,0,0,64,101.1Zm1.75-7.25H69.5V97.6H65.75Z"/><path className="fill-orange-600" d="M78.25,101.1H85.5a1.751,1.751,0,0,0,1.75-1.75V92.1a1.75,1.75,0,0,0-1.75-1.75H78.25A1.75,1.75,0,0,0,76.5,92.1v7.25A1.751,1.751,0,0,0,78.25,101.1ZM80,93.849h3.75V97.6H80Z"/></svg>},
]