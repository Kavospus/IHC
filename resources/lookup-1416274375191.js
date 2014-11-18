(function(window, undefined) {
  var dictionary = {
    "6a2bd97e-bc19-42cc-a5c3-25bed69ed80e": "Catalogo(Ac)",
    "ed44bc30-0c2c-4316-8459-c8da4e9ad307": "Compras",
    "19d149d7-28f5-44bc-84b5-1517b3a7c9e8": "Tela de pagamento",
    "21f6c723-d320-4ad0-aff7-0a9852c7014a": "Catalogo",
    "d12245cc-1680-458d-89dd-4f0d7fb22724": "Screen 1",
    "0b2df077-5725-43b4-a8d9-74be60e8a413": "Carrinho",
    "53f32546-6982-4584-baa8-215eb8d9d9ed": "login",
    "44a81d8e-55aa-4861-9faf-18f5d051ce93": "Catalogo(C)",
    "2709a58d-c62b-4493-9d50-cfb021809a27": "Catalogo(Al)",
    "87db3cf7-6bd4-40c3-b29c-45680fb11462": "960 grid - 16 columns",
    "e5f958a4-53ae-426e-8c05-2f7d8e00b762": "960 grid - 12 columns",
    "f39803f7-df02-4169-93eb-7547fb8c961a": "Template 1"
  };

  var uriRE = /^(\/#)?(screens|templates|masters)\/(.*)(\.html)?/;
  window.lookUpURL = function(fragment) {
    var matches = uriRE.exec(fragment || "") || [],
        folder = matches[2] || "",
        canvas = matches[3] || "",
        name, url;
    if(dictionary.hasOwnProperty(canvas)) { /* search by name */
      url = folder + "/" + canvas;
    }
    return url;
  };

  window.lookUpName = function(fragment) {
    var matches = uriRE.exec(fragment || "") || [],
        folder = matches[2] || "",
        canvas = matches[3] || "",
        name, canvasName;
    if(dictionary.hasOwnProperty(canvas)) { /* search by name */
      canvasName = dictionary[canvas];
    }
    return canvasName;
  };
})(window);