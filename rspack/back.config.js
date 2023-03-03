const path = require('path');
const config = {
  context: __dirname,
  entry: {
    main: './src/main.tsx',
  },
  resolve: {
    alias: {
      "@acme/ui-1": [
        "libs/ui-1/src/index.ts"
      ],
      "@acme/ui-10": [
        "libs/ui-10/src/index.ts"
      ],
      "@acme/ui-100": [
        "libs/ui-100/src/index.ts"
      ],
      "@acme/ui-1000": [
        "libs/ui-1000/src/index.ts"
      ],
      "@acme/ui-101": [
        "libs/ui-101/src/index.ts"
      ],
      "@acme/ui-102": [
        "libs/ui-102/src/index.ts"
      ],
      "@acme/ui-103": [
        "libs/ui-103/src/index.ts"
      ],
      "@acme/ui-104": [
        "libs/ui-104/src/index.ts"
      ],
      "@acme/ui-105": [
        "libs/ui-105/src/index.ts"
      ],
      "@acme/ui-106": [
        "libs/ui-106/src/index.ts"
      ],
      "@acme/ui-107": [
        "libs/ui-107/src/index.ts"
      ],
      "@acme/ui-108": [
        "libs/ui-108/src/index.ts"
      ],
      "@acme/ui-109": [
        "libs/ui-109/src/index.ts"
      ],
      "@acme/ui-11": [
        "libs/ui-11/src/index.ts"
      ],
      "@acme/ui-110": [
        "libs/ui-110/src/index.ts"
      ],
      "@acme/ui-111": [
        "libs/ui-111/src/index.ts"
      ],
      "@acme/ui-112": [
        "libs/ui-112/src/index.ts"
      ],
      "@acme/ui-113": [
        "libs/ui-113/src/index.ts"
      ],
      "@acme/ui-114": [
        "libs/ui-114/src/index.ts"
      ],
      "@acme/ui-115": [
        "libs/ui-115/src/index.ts"
      ],
      "@acme/ui-116": [
        "libs/ui-116/src/index.ts"
      ],
      "@acme/ui-117": [
        "libs/ui-117/src/index.ts"
      ],
      "@acme/ui-118": [
        "libs/ui-118/src/index.ts"
      ],
      "@acme/ui-119": [
        "libs/ui-119/src/index.ts"
      ],
      "@acme/ui-12": [
        "libs/ui-12/src/index.ts"
      ],
      "@acme/ui-120": [
        "libs/ui-120/src/index.ts"
      ],
      "@acme/ui-121": [
        "libs/ui-121/src/index.ts"
      ],
      "@acme/ui-122": [
        "libs/ui-122/src/index.ts"
      ],
      "@acme/ui-123": [
        "libs/ui-123/src/index.ts"
      ],
      "@acme/ui-124": [
        "libs/ui-124/src/index.ts"
      ],
      "@acme/ui-125": [
        "libs/ui-125/src/index.ts"
      ],
      "@acme/ui-126": [
        "libs/ui-126/src/index.ts"
      ],
      "@acme/ui-127": [
        "libs/ui-127/src/index.ts"
      ],
      "@acme/ui-128": [
        "libs/ui-128/src/index.ts"
      ],
      "@acme/ui-129": [
        "libs/ui-129/src/index.ts"
      ],
      "@acme/ui-13": [
        "libs/ui-13/src/index.ts"
      ],
      "@acme/ui-130": [
        "libs/ui-130/src/index.ts"
      ],
      "@acme/ui-131": [
        "libs/ui-131/src/index.ts"
      ],
      "@acme/ui-132": [
        "libs/ui-132/src/index.ts"
      ],
      "@acme/ui-133": [
        "libs/ui-133/src/index.ts"
      ],
      "@acme/ui-134": [
        "libs/ui-134/src/index.ts"
      ],
      "@acme/ui-135": [
        "libs/ui-135/src/index.ts"
      ],
      "@acme/ui-136": [
        "libs/ui-136/src/index.ts"
      ],
      "@acme/ui-137": [
        "libs/ui-137/src/index.ts"
      ],
      "@acme/ui-138": [
        "libs/ui-138/src/index.ts"
      ],
      "@acme/ui-139": [
        "libs/ui-139/src/index.ts"
      ],
      "@acme/ui-14": [
        "libs/ui-14/src/index.ts"
      ],
      "@acme/ui-140": [
        "libs/ui-140/src/index.ts"
      ],
      "@acme/ui-141": [
        "libs/ui-141/src/index.ts"
      ],
      "@acme/ui-142": [
        "libs/ui-142/src/index.ts"
      ],
      "@acme/ui-143": [
        "libs/ui-143/src/index.ts"
      ],
      "@acme/ui-144": [
        "libs/ui-144/src/index.ts"
      ],
      "@acme/ui-145": [
        "libs/ui-145/src/index.ts"
      ],
      "@acme/ui-146": [
        "libs/ui-146/src/index.ts"
      ],
      "@acme/ui-147": [
        "libs/ui-147/src/index.ts"
      ],
      "@acme/ui-148": [
        "libs/ui-148/src/index.ts"
      ],
      "@acme/ui-149": [
        "libs/ui-149/src/index.ts"
      ],
      "@acme/ui-15": [
        "libs/ui-15/src/index.ts"
      ],
      "@acme/ui-150": [
        "libs/ui-150/src/index.ts"
      ],
      "@acme/ui-151": [
        "libs/ui-151/src/index.ts"
      ],
      "@acme/ui-152": [
        "libs/ui-152/src/index.ts"
      ],
      "@acme/ui-153": [
        "libs/ui-153/src/index.ts"
      ],
      "@acme/ui-154": [
        "libs/ui-154/src/index.ts"
      ],
      "@acme/ui-155": [
        "libs/ui-155/src/index.ts"
      ],
      "@acme/ui-156": [
        "libs/ui-156/src/index.ts"
      ],
      "@acme/ui-157": [
        "libs/ui-157/src/index.ts"
      ],
      "@acme/ui-158": [
        "libs/ui-158/src/index.ts"
      ],
      "@acme/ui-159": [
        "libs/ui-159/src/index.ts"
      ],
      "@acme/ui-16": [
        "libs/ui-16/src/index.ts"
      ],
      "@acme/ui-160": [
        "libs/ui-160/src/index.ts"
      ],
      "@acme/ui-161": [
        "libs/ui-161/src/index.ts"
      ],
      "@acme/ui-162": [
        "libs/ui-162/src/index.ts"
      ],
      "@acme/ui-163": [
        "libs/ui-163/src/index.ts"
      ],
      "@acme/ui-164": [
        "libs/ui-164/src/index.ts"
      ],
      "@acme/ui-165": [
        "libs/ui-165/src/index.ts"
      ],
      "@acme/ui-166": [
        "libs/ui-166/src/index.ts"
      ],
      "@acme/ui-167": [
        "libs/ui-167/src/index.ts"
      ],
      "@acme/ui-168": [
        "libs/ui-168/src/index.ts"
      ],
      "@acme/ui-169": [
        "libs/ui-169/src/index.ts"
      ],
      "@acme/ui-17": [
        "libs/ui-17/src/index.ts"
      ],
      "@acme/ui-170": [
        "libs/ui-170/src/index.ts"
      ],
      "@acme/ui-171": [
        "libs/ui-171/src/index.ts"
      ],
      "@acme/ui-172": [
        "libs/ui-172/src/index.ts"
      ],
      "@acme/ui-173": [
        "libs/ui-173/src/index.ts"
      ],
      "@acme/ui-174": [
        "libs/ui-174/src/index.ts"
      ],
      "@acme/ui-175": [
        "libs/ui-175/src/index.ts"
      ],
      "@acme/ui-176": [
        "libs/ui-176/src/index.ts"
      ],
      "@acme/ui-177": [
        "libs/ui-177/src/index.ts"
      ],
      "@acme/ui-178": [
        "libs/ui-178/src/index.ts"
      ],
      "@acme/ui-179": [
        "libs/ui-179/src/index.ts"
      ],
      "@acme/ui-18": [
        "libs/ui-18/src/index.ts"
      ],
      "@acme/ui-180": [
        "libs/ui-180/src/index.ts"
      ],
      "@acme/ui-181": [
        "libs/ui-181/src/index.ts"
      ],
      "@acme/ui-182": [
        "libs/ui-182/src/index.ts"
      ],
      "@acme/ui-183": [
        "libs/ui-183/src/index.ts"
      ],
      "@acme/ui-184": [
        "libs/ui-184/src/index.ts"
      ],
      "@acme/ui-185": [
        "libs/ui-185/src/index.ts"
      ],
      "@acme/ui-186": [
        "libs/ui-186/src/index.ts"
      ],
      "@acme/ui-187": [
        "libs/ui-187/src/index.ts"
      ],
      "@acme/ui-188": [
        "libs/ui-188/src/index.ts"
      ],
      "@acme/ui-189": [
        "libs/ui-189/src/index.ts"
      ],
      "@acme/ui-19": [
        "libs/ui-19/src/index.ts"
      ],
      "@acme/ui-190": [
        "libs/ui-190/src/index.ts"
      ],
      "@acme/ui-191": [
        "libs/ui-191/src/index.ts"
      ],
      "@acme/ui-192": [
        "libs/ui-192/src/index.ts"
      ],
      "@acme/ui-193": [
        "libs/ui-193/src/index.ts"
      ],
      "@acme/ui-194": [
        "libs/ui-194/src/index.ts"
      ],
      "@acme/ui-195": [
        "libs/ui-195/src/index.ts"
      ],
      "@acme/ui-196": [
        "libs/ui-196/src/index.ts"
      ],
      "@acme/ui-197": [
        "libs/ui-197/src/index.ts"
      ],
      "@acme/ui-198": [
        "libs/ui-198/src/index.ts"
      ],
      "@acme/ui-199": [
        "libs/ui-199/src/index.ts"
      ],
      "@acme/ui-2": [
        "libs/ui-2/src/index.ts"
      ],
      "@acme/ui-20": [
        "libs/ui-20/src/index.ts"
      ],
      "@acme/ui-200": [
        "libs/ui-200/src/index.ts"
      ],
      "@acme/ui-201": [
        "libs/ui-201/src/index.ts"
      ],
      "@acme/ui-202": [
        "libs/ui-202/src/index.ts"
      ],
      "@acme/ui-203": [
        "libs/ui-203/src/index.ts"
      ],
      "@acme/ui-204": [
        "libs/ui-204/src/index.ts"
      ],
      "@acme/ui-205": [
        "libs/ui-205/src/index.ts"
      ],
      "@acme/ui-206": [
        "libs/ui-206/src/index.ts"
      ],
      "@acme/ui-207": [
        "libs/ui-207/src/index.ts"
      ],
      "@acme/ui-208": [
        "libs/ui-208/src/index.ts"
      ],
      "@acme/ui-209": [
        "libs/ui-209/src/index.ts"
      ],
      "@acme/ui-21": [
        "libs/ui-21/src/index.ts"
      ],
      "@acme/ui-210": [
        "libs/ui-210/src/index.ts"
      ],
      "@acme/ui-211": [
        "libs/ui-211/src/index.ts"
      ],
      "@acme/ui-212": [
        "libs/ui-212/src/index.ts"
      ],
      "@acme/ui-213": [
        "libs/ui-213/src/index.ts"
      ],
      "@acme/ui-214": [
        "libs/ui-214/src/index.ts"
      ],
      "@acme/ui-215": [
        "libs/ui-215/src/index.ts"
      ],
      "@acme/ui-216": [
        "libs/ui-216/src/index.ts"
      ],
      "@acme/ui-217": [
        "libs/ui-217/src/index.ts"
      ],
      "@acme/ui-218": [
        "libs/ui-218/src/index.ts"
      ],
      "@acme/ui-219": [
        "libs/ui-219/src/index.ts"
      ],
      "@acme/ui-22": [
        "libs/ui-22/src/index.ts"
      ],
      "@acme/ui-220": [
        "libs/ui-220/src/index.ts"
      ],
      "@acme/ui-221": [
        "libs/ui-221/src/index.ts"
      ],
      "@acme/ui-222": [
        "libs/ui-222/src/index.ts"
      ],
      "@acme/ui-223": [
        "libs/ui-223/src/index.ts"
      ],
      "@acme/ui-224": [
        "libs/ui-224/src/index.ts"
      ],
      "@acme/ui-225": [
        "libs/ui-225/src/index.ts"
      ],
      "@acme/ui-226": [
        "libs/ui-226/src/index.ts"
      ],
      "@acme/ui-227": [
        "libs/ui-227/src/index.ts"
      ],
      "@acme/ui-228": [
        "libs/ui-228/src/index.ts"
      ],
      "@acme/ui-229": [
        "libs/ui-229/src/index.ts"
      ],
      "@acme/ui-23": [
        "libs/ui-23/src/index.ts"
      ],
      "@acme/ui-230": [
        "libs/ui-230/src/index.ts"
      ],
      "@acme/ui-231": [
        "libs/ui-231/src/index.ts"
      ],
      "@acme/ui-232": [
        "libs/ui-232/src/index.ts"
      ],
      "@acme/ui-233": [
        "libs/ui-233/src/index.ts"
      ],
      "@acme/ui-234": [
        "libs/ui-234/src/index.ts"
      ],
      "@acme/ui-235": [
        "libs/ui-235/src/index.ts"
      ],
      "@acme/ui-236": [
        "libs/ui-236/src/index.ts"
      ],
      "@acme/ui-237": [
        "libs/ui-237/src/index.ts"
      ],
      "@acme/ui-238": [
        "libs/ui-238/src/index.ts"
      ],
      "@acme/ui-239": [
        "libs/ui-239/src/index.ts"
      ],
      "@acme/ui-24": [
        "libs/ui-24/src/index.ts"
      ],
      "@acme/ui-240": [
        "libs/ui-240/src/index.ts"
      ],
      "@acme/ui-241": [
        "libs/ui-241/src/index.ts"
      ],
      "@acme/ui-242": [
        "libs/ui-242/src/index.ts"
      ],
      "@acme/ui-243": [
        "libs/ui-243/src/index.ts"
      ],
      "@acme/ui-244": [
        "libs/ui-244/src/index.ts"
      ],
      "@acme/ui-245": [
        "libs/ui-245/src/index.ts"
      ],
      "@acme/ui-246": [
        "libs/ui-246/src/index.ts"
      ],
      "@acme/ui-247": [
        "libs/ui-247/src/index.ts"
      ],
      "@acme/ui-248": [
        "libs/ui-248/src/index.ts"
      ],
      "@acme/ui-249": [
        "libs/ui-249/src/index.ts"
      ],
      "@acme/ui-25": [
        "libs/ui-25/src/index.ts"
      ],
      "@acme/ui-250": [
        "libs/ui-250/src/index.ts"
      ],
      "@acme/ui-251": [
        "libs/ui-251/src/index.ts"
      ],
      "@acme/ui-252": [
        "libs/ui-252/src/index.ts"
      ],
      "@acme/ui-253": [
        "libs/ui-253/src/index.ts"
      ],
      "@acme/ui-254": [
        "libs/ui-254/src/index.ts"
      ],
      "@acme/ui-255": [
        "libs/ui-255/src/index.ts"
      ],
      "@acme/ui-256": [
        "libs/ui-256/src/index.ts"
      ],
      "@acme/ui-257": [
        "libs/ui-257/src/index.ts"
      ],
      "@acme/ui-258": [
        "libs/ui-258/src/index.ts"
      ],
      "@acme/ui-259": [
        "libs/ui-259/src/index.ts"
      ],
      "@acme/ui-26": [
        "libs/ui-26/src/index.ts"
      ],
      "@acme/ui-260": [
        "libs/ui-260/src/index.ts"
      ],
      "@acme/ui-261": [
        "libs/ui-261/src/index.ts"
      ],
      "@acme/ui-262": [
        "libs/ui-262/src/index.ts"
      ],
      "@acme/ui-263": [
        "libs/ui-263/src/index.ts"
      ],
      "@acme/ui-264": [
        "libs/ui-264/src/index.ts"
      ],
      "@acme/ui-265": [
        "libs/ui-265/src/index.ts"
      ],
      "@acme/ui-266": [
        "libs/ui-266/src/index.ts"
      ],
      "@acme/ui-267": [
        "libs/ui-267/src/index.ts"
      ],
      "@acme/ui-268": [
        "libs/ui-268/src/index.ts"
      ],
      "@acme/ui-269": [
        "libs/ui-269/src/index.ts"
      ],
      "@acme/ui-27": [
        "libs/ui-27/src/index.ts"
      ],
      "@acme/ui-270": [
        "libs/ui-270/src/index.ts"
      ],
      "@acme/ui-271": [
        "libs/ui-271/src/index.ts"
      ],
      "@acme/ui-272": [
        "libs/ui-272/src/index.ts"
      ],
      "@acme/ui-273": [
        "libs/ui-273/src/index.ts"
      ],
      "@acme/ui-274": [
        "libs/ui-274/src/index.ts"
      ],
      "@acme/ui-275": [
        "libs/ui-275/src/index.ts"
      ],
      "@acme/ui-276": [
        "libs/ui-276/src/index.ts"
      ],
      "@acme/ui-277": [
        "libs/ui-277/src/index.ts"
      ],
      "@acme/ui-278": [
        "libs/ui-278/src/index.ts"
      ],
      "@acme/ui-279": [
        "libs/ui-279/src/index.ts"
      ],
      "@acme/ui-28": [
        "libs/ui-28/src/index.ts"
      ],
      "@acme/ui-280": [
        "libs/ui-280/src/index.ts"
      ],
      "@acme/ui-281": [
        "libs/ui-281/src/index.ts"
      ],
      "@acme/ui-282": [
        "libs/ui-282/src/index.ts"
      ],
      "@acme/ui-283": [
        "libs/ui-283/src/index.ts"
      ],
      "@acme/ui-284": [
        "libs/ui-284/src/index.ts"
      ],
      "@acme/ui-285": [
        "libs/ui-285/src/index.ts"
      ],
      "@acme/ui-286": [
        "libs/ui-286/src/index.ts"
      ],
      "@acme/ui-287": [
        "libs/ui-287/src/index.ts"
      ],
      "@acme/ui-288": [
        "libs/ui-288/src/index.ts"
      ],
      "@acme/ui-289": [
        "libs/ui-289/src/index.ts"
      ],
      "@acme/ui-29": [
        "libs/ui-29/src/index.ts"
      ],
      "@acme/ui-290": [
        "libs/ui-290/src/index.ts"
      ],
      "@acme/ui-291": [
        "libs/ui-291/src/index.ts"
      ],
      "@acme/ui-292": [
        "libs/ui-292/src/index.ts"
      ],
      "@acme/ui-293": [
        "libs/ui-293/src/index.ts"
      ],
      "@acme/ui-294": [
        "libs/ui-294/src/index.ts"
      ],
      "@acme/ui-295": [
        "libs/ui-295/src/index.ts"
      ],
      "@acme/ui-296": [
        "libs/ui-296/src/index.ts"
      ],
      "@acme/ui-297": [
        "libs/ui-297/src/index.ts"
      ],
      "@acme/ui-298": [
        "libs/ui-298/src/index.ts"
      ],
      "@acme/ui-299": [
        "libs/ui-299/src/index.ts"
      ],
      "@acme/ui-3": [
        "libs/ui-3/src/index.ts"
      ],
      "@acme/ui-30": [
        "libs/ui-30/src/index.ts"
      ],
      "@acme/ui-300": [
        "libs/ui-300/src/index.ts"
      ],
      "@acme/ui-301": [
        "libs/ui-301/src/index.ts"
      ],
      "@acme/ui-302": [
        "libs/ui-302/src/index.ts"
      ],
      "@acme/ui-303": [
        "libs/ui-303/src/index.ts"
      ],
      "@acme/ui-304": [
        "libs/ui-304/src/index.ts"
      ],
      "@acme/ui-305": [
        "libs/ui-305/src/index.ts"
      ],
      "@acme/ui-306": [
        "libs/ui-306/src/index.ts"
      ],
      "@acme/ui-307": [
        "libs/ui-307/src/index.ts"
      ],
      "@acme/ui-308": [
        "libs/ui-308/src/index.ts"
      ],
      "@acme/ui-309": [
        "libs/ui-309/src/index.ts"
      ],
      "@acme/ui-31": [
        "libs/ui-31/src/index.ts"
      ],
      "@acme/ui-310": [
        "libs/ui-310/src/index.ts"
      ],
      "@acme/ui-311": [
        "libs/ui-311/src/index.ts"
      ],
      "@acme/ui-312": [
        "libs/ui-312/src/index.ts"
      ],
      "@acme/ui-313": [
        "libs/ui-313/src/index.ts"
      ],
      "@acme/ui-314": [
        "libs/ui-314/src/index.ts"
      ],
      "@acme/ui-315": [
        "libs/ui-315/src/index.ts"
      ],
      "@acme/ui-316": [
        "libs/ui-316/src/index.ts"
      ],
      "@acme/ui-317": [
        "libs/ui-317/src/index.ts"
      ],
      "@acme/ui-318": [
        "libs/ui-318/src/index.ts"
      ],
      "@acme/ui-319": [
        "libs/ui-319/src/index.ts"
      ],
      "@acme/ui-32": [
        "libs/ui-32/src/index.ts"
      ],
      "@acme/ui-320": [
        "libs/ui-320/src/index.ts"
      ],
      "@acme/ui-321": [
        "libs/ui-321/src/index.ts"
      ],
      "@acme/ui-322": [
        "libs/ui-322/src/index.ts"
      ],
      "@acme/ui-323": [
        "libs/ui-323/src/index.ts"
      ],
      "@acme/ui-324": [
        "libs/ui-324/src/index.ts"
      ],
      "@acme/ui-325": [
        "libs/ui-325/src/index.ts"
      ],
      "@acme/ui-326": [
        "libs/ui-326/src/index.ts"
      ],
      "@acme/ui-327": [
        "libs/ui-327/src/index.ts"
      ],
      "@acme/ui-328": [
        "libs/ui-328/src/index.ts"
      ],
      "@acme/ui-329": [
        "libs/ui-329/src/index.ts"
      ],
      "@acme/ui-33": [
        "libs/ui-33/src/index.ts"
      ],
      "@acme/ui-330": [
        "libs/ui-330/src/index.ts"
      ],
      "@acme/ui-331": [
        "libs/ui-331/src/index.ts"
      ],
      "@acme/ui-332": [
        "libs/ui-332/src/index.ts"
      ],
      "@acme/ui-333": [
        "libs/ui-333/src/index.ts"
      ],
      "@acme/ui-334": [
        "libs/ui-334/src/index.ts"
      ],
      "@acme/ui-335": [
        "libs/ui-335/src/index.ts"
      ],
      "@acme/ui-336": [
        "libs/ui-336/src/index.ts"
      ],
      "@acme/ui-337": [
        "libs/ui-337/src/index.ts"
      ],
      "@acme/ui-338": [
        "libs/ui-338/src/index.ts"
      ],
      "@acme/ui-339": [
        "libs/ui-339/src/index.ts"
      ],
      "@acme/ui-34": [
        "libs/ui-34/src/index.ts"
      ],
      "@acme/ui-340": [
        "libs/ui-340/src/index.ts"
      ],
      "@acme/ui-341": [
        "libs/ui-341/src/index.ts"
      ],
      "@acme/ui-342": [
        "libs/ui-342/src/index.ts"
      ],
      "@acme/ui-343": [
        "libs/ui-343/src/index.ts"
      ],
      "@acme/ui-344": [
        "libs/ui-344/src/index.ts"
      ],
      "@acme/ui-345": [
        "libs/ui-345/src/index.ts"
      ],
      "@acme/ui-346": [
        "libs/ui-346/src/index.ts"
      ],
      "@acme/ui-347": [
        "libs/ui-347/src/index.ts"
      ],
      "@acme/ui-348": [
        "libs/ui-348/src/index.ts"
      ],
      "@acme/ui-349": [
        "libs/ui-349/src/index.ts"
      ],
      "@acme/ui-35": [
        "libs/ui-35/src/index.ts"
      ],
      "@acme/ui-350": [
        "libs/ui-350/src/index.ts"
      ],
      "@acme/ui-351": [
        "libs/ui-351/src/index.ts"
      ],
      "@acme/ui-352": [
        "libs/ui-352/src/index.ts"
      ],
      "@acme/ui-353": [
        "libs/ui-353/src/index.ts"
      ],
      "@acme/ui-354": [
        "libs/ui-354/src/index.ts"
      ],
      "@acme/ui-355": [
        "libs/ui-355/src/index.ts"
      ],
      "@acme/ui-356": [
        "libs/ui-356/src/index.ts"
      ],
      "@acme/ui-357": [
        "libs/ui-357/src/index.ts"
      ],
      "@acme/ui-358": [
        "libs/ui-358/src/index.ts"
      ],
      "@acme/ui-359": [
        "libs/ui-359/src/index.ts"
      ],
      "@acme/ui-36": [
        "libs/ui-36/src/index.ts"
      ],
      "@acme/ui-360": [
        "libs/ui-360/src/index.ts"
      ],
      "@acme/ui-361": [
        "libs/ui-361/src/index.ts"
      ],
      "@acme/ui-362": [
        "libs/ui-362/src/index.ts"
      ],
      "@acme/ui-363": [
        "libs/ui-363/src/index.ts"
      ],
      "@acme/ui-364": [
        "libs/ui-364/src/index.ts"
      ],
      "@acme/ui-365": [
        "libs/ui-365/src/index.ts"
      ],
      "@acme/ui-366": [
        "libs/ui-366/src/index.ts"
      ],
      "@acme/ui-367": [
        "libs/ui-367/src/index.ts"
      ],
      "@acme/ui-368": [
        "libs/ui-368/src/index.ts"
      ],
      "@acme/ui-369": [
        "libs/ui-369/src/index.ts"
      ],
      "@acme/ui-37": [
        "libs/ui-37/src/index.ts"
      ],
      "@acme/ui-370": [
        "libs/ui-370/src/index.ts"
      ],
      "@acme/ui-371": [
        "libs/ui-371/src/index.ts"
      ],
      "@acme/ui-372": [
        "libs/ui-372/src/index.ts"
      ],
      "@acme/ui-373": [
        "libs/ui-373/src/index.ts"
      ],
      "@acme/ui-374": [
        "libs/ui-374/src/index.ts"
      ],
      "@acme/ui-375": [
        "libs/ui-375/src/index.ts"
      ],
      "@acme/ui-376": [
        "libs/ui-376/src/index.ts"
      ],
      "@acme/ui-377": [
        "libs/ui-377/src/index.ts"
      ],
      "@acme/ui-378": [
        "libs/ui-378/src/index.ts"
      ],
      "@acme/ui-379": [
        "libs/ui-379/src/index.ts"
      ],
      "@acme/ui-38": [
        "libs/ui-38/src/index.ts"
      ],
      "@acme/ui-380": [
        "libs/ui-380/src/index.ts"
      ],
      "@acme/ui-381": [
        "libs/ui-381/src/index.ts"
      ],
      "@acme/ui-382": [
        "libs/ui-382/src/index.ts"
      ],
      "@acme/ui-383": [
        "libs/ui-383/src/index.ts"
      ],
      "@acme/ui-384": [
        "libs/ui-384/src/index.ts"
      ],
      "@acme/ui-385": [
        "libs/ui-385/src/index.ts"
      ],
      "@acme/ui-386": [
        "libs/ui-386/src/index.ts"
      ],
      "@acme/ui-387": [
        "libs/ui-387/src/index.ts"
      ],
      "@acme/ui-388": [
        "libs/ui-388/src/index.ts"
      ],
      "@acme/ui-389": [
        "libs/ui-389/src/index.ts"
      ],
      "@acme/ui-39": [
        "libs/ui-39/src/index.ts"
      ],
      "@acme/ui-390": [
        "libs/ui-390/src/index.ts"
      ],
      "@acme/ui-391": [
        "libs/ui-391/src/index.ts"
      ],
      "@acme/ui-392": [
        "libs/ui-392/src/index.ts"
      ],
      "@acme/ui-393": [
        "libs/ui-393/src/index.ts"
      ],
      "@acme/ui-394": [
        "libs/ui-394/src/index.ts"
      ],
      "@acme/ui-395": [
        "libs/ui-395/src/index.ts"
      ],
      "@acme/ui-396": [
        "libs/ui-396/src/index.ts"
      ],
      "@acme/ui-397": [
        "libs/ui-397/src/index.ts"
      ],
      "@acme/ui-398": [
        "libs/ui-398/src/index.ts"
      ],
      "@acme/ui-399": [
        "libs/ui-399/src/index.ts"
      ],
      "@acme/ui-4": [
        "libs/ui-4/src/index.ts"
      ],
      "@acme/ui-40": [
        "libs/ui-40/src/index.ts"
      ],
      "@acme/ui-400": [
        "libs/ui-400/src/index.ts"
      ],
      "@acme/ui-401": [
        "libs/ui-401/src/index.ts"
      ],
      "@acme/ui-402": [
        "libs/ui-402/src/index.ts"
      ],
      "@acme/ui-403": [
        "libs/ui-403/src/index.ts"
      ],
      "@acme/ui-404": [
        "libs/ui-404/src/index.ts"
      ],
      "@acme/ui-405": [
        "libs/ui-405/src/index.ts"
      ],
      "@acme/ui-406": [
        "libs/ui-406/src/index.ts"
      ],
      "@acme/ui-407": [
        "libs/ui-407/src/index.ts"
      ],
      "@acme/ui-408": [
        "libs/ui-408/src/index.ts"
      ],
      "@acme/ui-409": [
        "libs/ui-409/src/index.ts"
      ],
      "@acme/ui-41": [
        "libs/ui-41/src/index.ts"
      ],
      "@acme/ui-410": [
        "libs/ui-410/src/index.ts"
      ],
      "@acme/ui-411": [
        "libs/ui-411/src/index.ts"
      ],
      "@acme/ui-412": [
        "libs/ui-412/src/index.ts"
      ],
      "@acme/ui-413": [
        "libs/ui-413/src/index.ts"
      ],
      "@acme/ui-414": [
        "libs/ui-414/src/index.ts"
      ],
      "@acme/ui-415": [
        "libs/ui-415/src/index.ts"
      ],
      "@acme/ui-416": [
        "libs/ui-416/src/index.ts"
      ],
      "@acme/ui-417": [
        "libs/ui-417/src/index.ts"
      ],
      "@acme/ui-418": [
        "libs/ui-418/src/index.ts"
      ],
      "@acme/ui-419": [
        "libs/ui-419/src/index.ts"
      ],
      "@acme/ui-42": [
        "libs/ui-42/src/index.ts"
      ],
      "@acme/ui-420": [
        "libs/ui-420/src/index.ts"
      ],
      "@acme/ui-421": [
        "libs/ui-421/src/index.ts"
      ],
      "@acme/ui-422": [
        "libs/ui-422/src/index.ts"
      ],
      "@acme/ui-423": [
        "libs/ui-423/src/index.ts"
      ],
      "@acme/ui-424": [
        "libs/ui-424/src/index.ts"
      ],
      "@acme/ui-425": [
        "libs/ui-425/src/index.ts"
      ],
      "@acme/ui-426": [
        "libs/ui-426/src/index.ts"
      ],
      "@acme/ui-427": [
        "libs/ui-427/src/index.ts"
      ],
      "@acme/ui-428": [
        "libs/ui-428/src/index.ts"
      ],
      "@acme/ui-429": [
        "libs/ui-429/src/index.ts"
      ],
      "@acme/ui-43": [
        "libs/ui-43/src/index.ts"
      ],
      "@acme/ui-430": [
        "libs/ui-430/src/index.ts"
      ],
      "@acme/ui-431": [
        "libs/ui-431/src/index.ts"
      ],
      "@acme/ui-432": [
        "libs/ui-432/src/index.ts"
      ],
      "@acme/ui-433": [
        "libs/ui-433/src/index.ts"
      ],
      "@acme/ui-434": [
        "libs/ui-434/src/index.ts"
      ],
      "@acme/ui-435": [
        "libs/ui-435/src/index.ts"
      ],
      "@acme/ui-436": [
        "libs/ui-436/src/index.ts"
      ],
      "@acme/ui-437": [
        "libs/ui-437/src/index.ts"
      ],
      "@acme/ui-438": [
        "libs/ui-438/src/index.ts"
      ],
      "@acme/ui-439": [
        "libs/ui-439/src/index.ts"
      ],
      "@acme/ui-44": [
        "libs/ui-44/src/index.ts"
      ],
      "@acme/ui-440": [
        "libs/ui-440/src/index.ts"
      ],
      "@acme/ui-441": [
        "libs/ui-441/src/index.ts"
      ],
      "@acme/ui-442": [
        "libs/ui-442/src/index.ts"
      ],
      "@acme/ui-443": [
        "libs/ui-443/src/index.ts"
      ],
      "@acme/ui-444": [
        "libs/ui-444/src/index.ts"
      ],
      "@acme/ui-445": [
        "libs/ui-445/src/index.ts"
      ],
      "@acme/ui-446": [
        "libs/ui-446/src/index.ts"
      ],
      "@acme/ui-447": [
        "libs/ui-447/src/index.ts"
      ],
      "@acme/ui-448": [
        "libs/ui-448/src/index.ts"
      ],
      "@acme/ui-449": [
        "libs/ui-449/src/index.ts"
      ],
      "@acme/ui-45": [
        "libs/ui-45/src/index.ts"
      ],
      "@acme/ui-450": [
        "libs/ui-450/src/index.ts"
      ],
      "@acme/ui-451": [
        "libs/ui-451/src/index.ts"
      ],
      "@acme/ui-452": [
        "libs/ui-452/src/index.ts"
      ],
      "@acme/ui-453": [
        "libs/ui-453/src/index.ts"
      ],
      "@acme/ui-454": [
        "libs/ui-454/src/index.ts"
      ],
      "@acme/ui-455": [
        "libs/ui-455/src/index.ts"
      ],
      "@acme/ui-456": [
        "libs/ui-456/src/index.ts"
      ],
      "@acme/ui-457": [
        "libs/ui-457/src/index.ts"
      ],
      "@acme/ui-458": [
        "libs/ui-458/src/index.ts"
      ],
      "@acme/ui-459": [
        "libs/ui-459/src/index.ts"
      ],
      "@acme/ui-46": [
        "libs/ui-46/src/index.ts"
      ],
      "@acme/ui-460": [
        "libs/ui-460/src/index.ts"
      ],
      "@acme/ui-461": [
        "libs/ui-461/src/index.ts"
      ],
      "@acme/ui-462": [
        "libs/ui-462/src/index.ts"
      ],
      "@acme/ui-463": [
        "libs/ui-463/src/index.ts"
      ],
      "@acme/ui-464": [
        "libs/ui-464/src/index.ts"
      ],
      "@acme/ui-465": [
        "libs/ui-465/src/index.ts"
      ],
      "@acme/ui-466": [
        "libs/ui-466/src/index.ts"
      ],
      "@acme/ui-467": [
        "libs/ui-467/src/index.ts"
      ],
      "@acme/ui-468": [
        "libs/ui-468/src/index.ts"
      ],
      "@acme/ui-469": [
        "libs/ui-469/src/index.ts"
      ],
      "@acme/ui-47": [
        "libs/ui-47/src/index.ts"
      ],
      "@acme/ui-470": [
        "libs/ui-470/src/index.ts"
      ],
      "@acme/ui-471": [
        "libs/ui-471/src/index.ts"
      ],
      "@acme/ui-472": [
        "libs/ui-472/src/index.ts"
      ],
      "@acme/ui-473": [
        "libs/ui-473/src/index.ts"
      ],
      "@acme/ui-474": [
        "libs/ui-474/src/index.ts"
      ],
      "@acme/ui-475": [
        "libs/ui-475/src/index.ts"
      ],
      "@acme/ui-476": [
        "libs/ui-476/src/index.ts"
      ],
      "@acme/ui-477": [
        "libs/ui-477/src/index.ts"
      ],
      "@acme/ui-478": [
        "libs/ui-478/src/index.ts"
      ],
      "@acme/ui-479": [
        "libs/ui-479/src/index.ts"
      ],
      "@acme/ui-48": [
        "libs/ui-48/src/index.ts"
      ],
      "@acme/ui-480": [
        "libs/ui-480/src/index.ts"
      ],
      "@acme/ui-481": [
        "libs/ui-481/src/index.ts"
      ],
      "@acme/ui-482": [
        "libs/ui-482/src/index.ts"
      ],
      "@acme/ui-483": [
        "libs/ui-483/src/index.ts"
      ],
      "@acme/ui-484": [
        "libs/ui-484/src/index.ts"
      ],
      "@acme/ui-485": [
        "libs/ui-485/src/index.ts"
      ],
      "@acme/ui-486": [
        "libs/ui-486/src/index.ts"
      ],
      "@acme/ui-487": [
        "libs/ui-487/src/index.ts"
      ],
      "@acme/ui-488": [
        "libs/ui-488/src/index.ts"
      ],
      "@acme/ui-489": [
        "libs/ui-489/src/index.ts"
      ],
      "@acme/ui-49": [
        "libs/ui-49/src/index.ts"
      ],
      "@acme/ui-490": [
        "libs/ui-490/src/index.ts"
      ],
      "@acme/ui-491": [
        "libs/ui-491/src/index.ts"
      ],
      "@acme/ui-492": [
        "libs/ui-492/src/index.ts"
      ],
      "@acme/ui-493": [
        "libs/ui-493/src/index.ts"
      ],
      "@acme/ui-494": [
        "libs/ui-494/src/index.ts"
      ],
      "@acme/ui-495": [
        "libs/ui-495/src/index.ts"
      ],
      "@acme/ui-496": [
        "libs/ui-496/src/index.ts"
      ],
      "@acme/ui-497": [
        "libs/ui-497/src/index.ts"
      ],
      "@acme/ui-498": [
        "libs/ui-498/src/index.ts"
      ],
      "@acme/ui-499": [
        "libs/ui-499/src/index.ts"
      ],
      "@acme/ui-5": [
        "libs/ui-5/src/index.ts"
      ],
      "@acme/ui-50": [
        "libs/ui-50/src/index.ts"
      ],
      "@acme/ui-500": [
        "libs/ui-500/src/index.ts"
      ],
      "@acme/ui-501": [
        "libs/ui-501/src/index.ts"
      ],
      "@acme/ui-502": [
        "libs/ui-502/src/index.ts"
      ],
      "@acme/ui-503": [
        "libs/ui-503/src/index.ts"
      ],
      "@acme/ui-504": [
        "libs/ui-504/src/index.ts"
      ],
      "@acme/ui-505": [
        "libs/ui-505/src/index.ts"
      ],
      "@acme/ui-506": [
        "libs/ui-506/src/index.ts"
      ],
      "@acme/ui-507": [
        "libs/ui-507/src/index.ts"
      ],
      "@acme/ui-508": [
        "libs/ui-508/src/index.ts"
      ],
      "@acme/ui-509": [
        "libs/ui-509/src/index.ts"
      ],
      "@acme/ui-51": [
        "libs/ui-51/src/index.ts"
      ],
      "@acme/ui-510": [
        "libs/ui-510/src/index.ts"
      ],
      "@acme/ui-511": [
        "libs/ui-511/src/index.ts"
      ],
      "@acme/ui-512": [
        "libs/ui-512/src/index.ts"
      ],
      "@acme/ui-513": [
        "libs/ui-513/src/index.ts"
      ],
      "@acme/ui-514": [
        "libs/ui-514/src/index.ts"
      ],
      "@acme/ui-515": [
        "libs/ui-515/src/index.ts"
      ],
      "@acme/ui-516": [
        "libs/ui-516/src/index.ts"
      ],
      "@acme/ui-517": [
        "libs/ui-517/src/index.ts"
      ],
      "@acme/ui-518": [
        "libs/ui-518/src/index.ts"
      ],
      "@acme/ui-519": [
        "libs/ui-519/src/index.ts"
      ],
      "@acme/ui-52": [
        "libs/ui-52/src/index.ts"
      ],
      "@acme/ui-520": [
        "libs/ui-520/src/index.ts"
      ],
      "@acme/ui-521": [
        "libs/ui-521/src/index.ts"
      ],
      "@acme/ui-522": [
        "libs/ui-522/src/index.ts"
      ],
      "@acme/ui-523": [
        "libs/ui-523/src/index.ts"
      ],
      "@acme/ui-524": [
        "libs/ui-524/src/index.ts"
      ],
      "@acme/ui-525": [
        "libs/ui-525/src/index.ts"
      ],
      "@acme/ui-526": [
        "libs/ui-526/src/index.ts"
      ],
      "@acme/ui-527": [
        "libs/ui-527/src/index.ts"
      ],
      "@acme/ui-528": [
        "libs/ui-528/src/index.ts"
      ],
      "@acme/ui-529": [
        "libs/ui-529/src/index.ts"
      ],
      "@acme/ui-53": [
        "libs/ui-53/src/index.ts"
      ],
      "@acme/ui-530": [
        "libs/ui-530/src/index.ts"
      ],
      "@acme/ui-531": [
        "libs/ui-531/src/index.ts"
      ],
      "@acme/ui-532": [
        "libs/ui-532/src/index.ts"
      ],
      "@acme/ui-533": [
        "libs/ui-533/src/index.ts"
      ],
      "@acme/ui-534": [
        "libs/ui-534/src/index.ts"
      ],
      "@acme/ui-535": [
        "libs/ui-535/src/index.ts"
      ],
      "@acme/ui-536": [
        "libs/ui-536/src/index.ts"
      ],
      "@acme/ui-537": [
        "libs/ui-537/src/index.ts"
      ],
      "@acme/ui-538": [
        "libs/ui-538/src/index.ts"
      ],
      "@acme/ui-539": [
        "libs/ui-539/src/index.ts"
      ],
      "@acme/ui-54": [
        "libs/ui-54/src/index.ts"
      ],
      "@acme/ui-540": [
        "libs/ui-540/src/index.ts"
      ],
      "@acme/ui-541": [
        "libs/ui-541/src/index.ts"
      ],
      "@acme/ui-542": [
        "libs/ui-542/src/index.ts"
      ],
      "@acme/ui-543": [
        "libs/ui-543/src/index.ts"
      ],
      "@acme/ui-544": [
        "libs/ui-544/src/index.ts"
      ],
      "@acme/ui-545": [
        "libs/ui-545/src/index.ts"
      ],
      "@acme/ui-546": [
        "libs/ui-546/src/index.ts"
      ],
      "@acme/ui-547": [
        "libs/ui-547/src/index.ts"
      ],
      "@acme/ui-548": [
        "libs/ui-548/src/index.ts"
      ],
      "@acme/ui-549": [
        "libs/ui-549/src/index.ts"
      ],
      "@acme/ui-55": [
        "libs/ui-55/src/index.ts"
      ],
      "@acme/ui-550": [
        "libs/ui-550/src/index.ts"
      ],
      "@acme/ui-551": [
        "libs/ui-551/src/index.ts"
      ],
      "@acme/ui-552": [
        "libs/ui-552/src/index.ts"
      ],
      "@acme/ui-553": [
        "libs/ui-553/src/index.ts"
      ],
      "@acme/ui-554": [
        "libs/ui-554/src/index.ts"
      ],
      "@acme/ui-555": [
        "libs/ui-555/src/index.ts"
      ],
      "@acme/ui-556": [
        "libs/ui-556/src/index.ts"
      ],
      "@acme/ui-557": [
        "libs/ui-557/src/index.ts"
      ],
      "@acme/ui-558": [
        "libs/ui-558/src/index.ts"
      ],
      "@acme/ui-559": [
        "libs/ui-559/src/index.ts"
      ],
      "@acme/ui-56": [
        "libs/ui-56/src/index.ts"
      ],
      "@acme/ui-560": [
        "libs/ui-560/src/index.ts"
      ],
      "@acme/ui-561": [
        "libs/ui-561/src/index.ts"
      ],
      "@acme/ui-562": [
        "libs/ui-562/src/index.ts"
      ],
      "@acme/ui-563": [
        "libs/ui-563/src/index.ts"
      ],
      "@acme/ui-564": [
        "libs/ui-564/src/index.ts"
      ],
      "@acme/ui-565": [
        "libs/ui-565/src/index.ts"
      ],
      "@acme/ui-566": [
        "libs/ui-566/src/index.ts"
      ],
      "@acme/ui-567": [
        "libs/ui-567/src/index.ts"
      ],
      "@acme/ui-568": [
        "libs/ui-568/src/index.ts"
      ],
      "@acme/ui-569": [
        "libs/ui-569/src/index.ts"
      ],
      "@acme/ui-57": [
        "libs/ui-57/src/index.ts"
      ],
      "@acme/ui-570": [
        "libs/ui-570/src/index.ts"
      ],
      "@acme/ui-571": [
        "libs/ui-571/src/index.ts"
      ],
      "@acme/ui-572": [
        "libs/ui-572/src/index.ts"
      ],
      "@acme/ui-573": [
        "libs/ui-573/src/index.ts"
      ],
      "@acme/ui-574": [
        "libs/ui-574/src/index.ts"
      ],
      "@acme/ui-575": [
        "libs/ui-575/src/index.ts"
      ],
      "@acme/ui-576": [
        "libs/ui-576/src/index.ts"
      ],
      "@acme/ui-577": [
        "libs/ui-577/src/index.ts"
      ],
      "@acme/ui-578": [
        "libs/ui-578/src/index.ts"
      ],
      "@acme/ui-579": [
        "libs/ui-579/src/index.ts"
      ],
      "@acme/ui-58": [
        "libs/ui-58/src/index.ts"
      ],
      "@acme/ui-580": [
        "libs/ui-580/src/index.ts"
      ],
      "@acme/ui-581": [
        "libs/ui-581/src/index.ts"
      ],
      "@acme/ui-582": [
        "libs/ui-582/src/index.ts"
      ],
      "@acme/ui-583": [
        "libs/ui-583/src/index.ts"
      ],
      "@acme/ui-584": [
        "libs/ui-584/src/index.ts"
      ],
      "@acme/ui-585": [
        "libs/ui-585/src/index.ts"
      ],
      "@acme/ui-586": [
        "libs/ui-586/src/index.ts"
      ],
      "@acme/ui-587": [
        "libs/ui-587/src/index.ts"
      ],
      "@acme/ui-588": [
        "libs/ui-588/src/index.ts"
      ],
      "@acme/ui-589": [
        "libs/ui-589/src/index.ts"
      ],
      "@acme/ui-59": [
        "libs/ui-59/src/index.ts"
      ],
      "@acme/ui-590": [
        "libs/ui-590/src/index.ts"
      ],
      "@acme/ui-591": [
        "libs/ui-591/src/index.ts"
      ],
      "@acme/ui-592": [
        "libs/ui-592/src/index.ts"
      ],
      "@acme/ui-593": [
        "libs/ui-593/src/index.ts"
      ],
      "@acme/ui-594": [
        "libs/ui-594/src/index.ts"
      ],
      "@acme/ui-595": [
        "libs/ui-595/src/index.ts"
      ],
      "@acme/ui-596": [
        "libs/ui-596/src/index.ts"
      ],
      "@acme/ui-597": [
        "libs/ui-597/src/index.ts"
      ],
      "@acme/ui-598": [
        "libs/ui-598/src/index.ts"
      ],
      "@acme/ui-599": [
        "libs/ui-599/src/index.ts"
      ],
      "@acme/ui-6": [
        "libs/ui-6/src/index.ts"
      ],
      "@acme/ui-60": [
        "libs/ui-60/src/index.ts"
      ],
      "@acme/ui-600": [
        "libs/ui-600/src/index.ts"
      ],
      "@acme/ui-601": [
        "libs/ui-601/src/index.ts"
      ],
      "@acme/ui-602": [
        "libs/ui-602/src/index.ts"
      ],
      "@acme/ui-603": [
        "libs/ui-603/src/index.ts"
      ],
      "@acme/ui-604": [
        "libs/ui-604/src/index.ts"
      ],
      "@acme/ui-605": [
        "libs/ui-605/src/index.ts"
      ],
      "@acme/ui-606": [
        "libs/ui-606/src/index.ts"
      ],
      "@acme/ui-607": [
        "libs/ui-607/src/index.ts"
      ],
      "@acme/ui-608": [
        "libs/ui-608/src/index.ts"
      ],
      "@acme/ui-609": [
        "libs/ui-609/src/index.ts"
      ],
      "@acme/ui-61": [
        "libs/ui-61/src/index.ts"
      ],
      "@acme/ui-610": [
        "libs/ui-610/src/index.ts"
      ],
      "@acme/ui-611": [
        "libs/ui-611/src/index.ts"
      ],
      "@acme/ui-612": [
        "libs/ui-612/src/index.ts"
      ],
      "@acme/ui-613": [
        "libs/ui-613/src/index.ts"
      ],
      "@acme/ui-614": [
        "libs/ui-614/src/index.ts"
      ],
      "@acme/ui-615": [
        "libs/ui-615/src/index.ts"
      ],
      "@acme/ui-616": [
        "libs/ui-616/src/index.ts"
      ],
      "@acme/ui-617": [
        "libs/ui-617/src/index.ts"
      ],
      "@acme/ui-618": [
        "libs/ui-618/src/index.ts"
      ],
      "@acme/ui-619": [
        "libs/ui-619/src/index.ts"
      ],
      "@acme/ui-62": [
        "libs/ui-62/src/index.ts"
      ],
      "@acme/ui-620": [
        "libs/ui-620/src/index.ts"
      ],
      "@acme/ui-621": [
        "libs/ui-621/src/index.ts"
      ],
      "@acme/ui-622": [
        "libs/ui-622/src/index.ts"
      ],
      "@acme/ui-623": [
        "libs/ui-623/src/index.ts"
      ],
      "@acme/ui-624": [
        "libs/ui-624/src/index.ts"
      ],
      "@acme/ui-625": [
        "libs/ui-625/src/index.ts"
      ],
      "@acme/ui-626": [
        "libs/ui-626/src/index.ts"
      ],
      "@acme/ui-627": [
        "libs/ui-627/src/index.ts"
      ],
      "@acme/ui-628": [
        "libs/ui-628/src/index.ts"
      ],
      "@acme/ui-629": [
        "libs/ui-629/src/index.ts"
      ],
      "@acme/ui-63": [
        "libs/ui-63/src/index.ts"
      ],
      "@acme/ui-630": [
        "libs/ui-630/src/index.ts"
      ],
      "@acme/ui-631": [
        "libs/ui-631/src/index.ts"
      ],
      "@acme/ui-632": [
        "libs/ui-632/src/index.ts"
      ],
      "@acme/ui-633": [
        "libs/ui-633/src/index.ts"
      ],
      "@acme/ui-634": [
        "libs/ui-634/src/index.ts"
      ],
      "@acme/ui-635": [
        "libs/ui-635/src/index.ts"
      ],
      "@acme/ui-636": [
        "libs/ui-636/src/index.ts"
      ],
      "@acme/ui-637": [
        "libs/ui-637/src/index.ts"
      ],
      "@acme/ui-638": [
        "libs/ui-638/src/index.ts"
      ],
      "@acme/ui-639": [
        "libs/ui-639/src/index.ts"
      ],
      "@acme/ui-64": [
        "libs/ui-64/src/index.ts"
      ],
      "@acme/ui-640": [
        "libs/ui-640/src/index.ts"
      ],
      "@acme/ui-641": [
        "libs/ui-641/src/index.ts"
      ],
      "@acme/ui-642": [
        "libs/ui-642/src/index.ts"
      ],
      "@acme/ui-643": [
        "libs/ui-643/src/index.ts"
      ],
      "@acme/ui-644": [
        "libs/ui-644/src/index.ts"
      ],
      "@acme/ui-645": [
        "libs/ui-645/src/index.ts"
      ],
      "@acme/ui-646": [
        "libs/ui-646/src/index.ts"
      ],
      "@acme/ui-647": [
        "libs/ui-647/src/index.ts"
      ],
      "@acme/ui-648": [
        "libs/ui-648/src/index.ts"
      ],
      "@acme/ui-649": [
        "libs/ui-649/src/index.ts"
      ],
      "@acme/ui-65": [
        "libs/ui-65/src/index.ts"
      ],
      "@acme/ui-650": [
        "libs/ui-650/src/index.ts"
      ],
      "@acme/ui-651": [
        "libs/ui-651/src/index.ts"
      ],
      "@acme/ui-652": [
        "libs/ui-652/src/index.ts"
      ],
      "@acme/ui-653": [
        "libs/ui-653/src/index.ts"
      ],
      "@acme/ui-654": [
        "libs/ui-654/src/index.ts"
      ],
      "@acme/ui-655": [
        "libs/ui-655/src/index.ts"
      ],
      "@acme/ui-656": [
        "libs/ui-656/src/index.ts"
      ],
      "@acme/ui-657": [
        "libs/ui-657/src/index.ts"
      ],
      "@acme/ui-658": [
        "libs/ui-658/src/index.ts"
      ],
      "@acme/ui-659": [
        "libs/ui-659/src/index.ts"
      ],
      "@acme/ui-66": [
        "libs/ui-66/src/index.ts"
      ],
      "@acme/ui-660": [
        "libs/ui-660/src/index.ts"
      ],
      "@acme/ui-661": [
        "libs/ui-661/src/index.ts"
      ],
      "@acme/ui-662": [
        "libs/ui-662/src/index.ts"
      ],
      "@acme/ui-663": [
        "libs/ui-663/src/index.ts"
      ],
      "@acme/ui-664": [
        "libs/ui-664/src/index.ts"
      ],
      "@acme/ui-665": [
        "libs/ui-665/src/index.ts"
      ],
      "@acme/ui-666": [
        "libs/ui-666/src/index.ts"
      ],
      "@acme/ui-667": [
        "libs/ui-667/src/index.ts"
      ],
      "@acme/ui-668": [
        "libs/ui-668/src/index.ts"
      ],
      "@acme/ui-669": [
        "libs/ui-669/src/index.ts"
      ],
      "@acme/ui-67": [
        "libs/ui-67/src/index.ts"
      ],
      "@acme/ui-670": [
        "libs/ui-670/src/index.ts"
      ],
      "@acme/ui-671": [
        "libs/ui-671/src/index.ts"
      ],
      "@acme/ui-672": [
        "libs/ui-672/src/index.ts"
      ],
      "@acme/ui-673": [
        "libs/ui-673/src/index.ts"
      ],
      "@acme/ui-674": [
        "libs/ui-674/src/index.ts"
      ],
      "@acme/ui-675": [
        "libs/ui-675/src/index.ts"
      ],
      "@acme/ui-676": [
        "libs/ui-676/src/index.ts"
      ],
      "@acme/ui-677": [
        "libs/ui-677/src/index.ts"
      ],
      "@acme/ui-678": [
        "libs/ui-678/src/index.ts"
      ],
      "@acme/ui-679": [
        "libs/ui-679/src/index.ts"
      ],
      "@acme/ui-68": [
        "libs/ui-68/src/index.ts"
      ],
      "@acme/ui-680": [
        "libs/ui-680/src/index.ts"
      ],
      "@acme/ui-681": [
        "libs/ui-681/src/index.ts"
      ],
      "@acme/ui-682": [
        "libs/ui-682/src/index.ts"
      ],
      "@acme/ui-683": [
        "libs/ui-683/src/index.ts"
      ],
      "@acme/ui-684": [
        "libs/ui-684/src/index.ts"
      ],
      "@acme/ui-685": [
        "libs/ui-685/src/index.ts"
      ],
      "@acme/ui-686": [
        "libs/ui-686/src/index.ts"
      ],
      "@acme/ui-687": [
        "libs/ui-687/src/index.ts"
      ],
      "@acme/ui-688": [
        "libs/ui-688/src/index.ts"
      ],
      "@acme/ui-689": [
        "libs/ui-689/src/index.ts"
      ],
      "@acme/ui-69": [
        "libs/ui-69/src/index.ts"
      ],
      "@acme/ui-690": [
        "libs/ui-690/src/index.ts"
      ],
      "@acme/ui-691": [
        "libs/ui-691/src/index.ts"
      ],
      "@acme/ui-692": [
        "libs/ui-692/src/index.ts"
      ],
      "@acme/ui-693": [
        "libs/ui-693/src/index.ts"
      ],
      "@acme/ui-694": [
        "libs/ui-694/src/index.ts"
      ],
      "@acme/ui-695": [
        "libs/ui-695/src/index.ts"
      ],
      "@acme/ui-696": [
        "libs/ui-696/src/index.ts"
      ],
      "@acme/ui-697": [
        "libs/ui-697/src/index.ts"
      ],
      "@acme/ui-698": [
        "libs/ui-698/src/index.ts"
      ],
      "@acme/ui-699": [
        "libs/ui-699/src/index.ts"
      ],
      "@acme/ui-7": [
        "libs/ui-7/src/index.ts"
      ],
      "@acme/ui-70": [
        "libs/ui-70/src/index.ts"
      ],
      "@acme/ui-700": [
        "libs/ui-700/src/index.ts"
      ],
      "@acme/ui-701": [
        "libs/ui-701/src/index.ts"
      ],
      "@acme/ui-702": [
        "libs/ui-702/src/index.ts"
      ],
      "@acme/ui-703": [
        "libs/ui-703/src/index.ts"
      ],
      "@acme/ui-704": [
        "libs/ui-704/src/index.ts"
      ],
      "@acme/ui-705": [
        "libs/ui-705/src/index.ts"
      ],
      "@acme/ui-706": [
        "libs/ui-706/src/index.ts"
      ],
      "@acme/ui-707": [
        "libs/ui-707/src/index.ts"
      ],
      "@acme/ui-708": [
        "libs/ui-708/src/index.ts"
      ],
      "@acme/ui-709": [
        "libs/ui-709/src/index.ts"
      ],
      "@acme/ui-71": [
        "libs/ui-71/src/index.ts"
      ],
      "@acme/ui-710": [
        "libs/ui-710/src/index.ts"
      ],
      "@acme/ui-711": [
        "libs/ui-711/src/index.ts"
      ],
      "@acme/ui-712": [
        "libs/ui-712/src/index.ts"
      ],
      "@acme/ui-713": [
        "libs/ui-713/src/index.ts"
      ],
      "@acme/ui-714": [
        "libs/ui-714/src/index.ts"
      ],
      "@acme/ui-715": [
        "libs/ui-715/src/index.ts"
      ],
      "@acme/ui-716": [
        "libs/ui-716/src/index.ts"
      ],
      "@acme/ui-717": [
        "libs/ui-717/src/index.ts"
      ],
      "@acme/ui-718": [
        "libs/ui-718/src/index.ts"
      ],
      "@acme/ui-719": [
        "libs/ui-719/src/index.ts"
      ],
      "@acme/ui-72": [
        "libs/ui-72/src/index.ts"
      ],
      "@acme/ui-720": [
        "libs/ui-720/src/index.ts"
      ],
      "@acme/ui-721": [
        "libs/ui-721/src/index.ts"
      ],
      "@acme/ui-722": [
        "libs/ui-722/src/index.ts"
      ],
      "@acme/ui-723": [
        "libs/ui-723/src/index.ts"
      ],
      "@acme/ui-724": [
        "libs/ui-724/src/index.ts"
      ],
      "@acme/ui-725": [
        "libs/ui-725/src/index.ts"
      ],
      "@acme/ui-726": [
        "libs/ui-726/src/index.ts"
      ],
      "@acme/ui-727": [
        "libs/ui-727/src/index.ts"
      ],
      "@acme/ui-728": [
        "libs/ui-728/src/index.ts"
      ],
      "@acme/ui-729": [
        "libs/ui-729/src/index.ts"
      ],
      "@acme/ui-73": [
        "libs/ui-73/src/index.ts"
      ],
      "@acme/ui-730": [
        "libs/ui-730/src/index.ts"
      ],
      "@acme/ui-731": [
        "libs/ui-731/src/index.ts"
      ],
      "@acme/ui-732": [
        "libs/ui-732/src/index.ts"
      ],
      "@acme/ui-733": [
        "libs/ui-733/src/index.ts"
      ],
      "@acme/ui-734": [
        "libs/ui-734/src/index.ts"
      ],
      "@acme/ui-735": [
        "libs/ui-735/src/index.ts"
      ],
      "@acme/ui-736": [
        "libs/ui-736/src/index.ts"
      ],
      "@acme/ui-737": [
        "libs/ui-737/src/index.ts"
      ],
      "@acme/ui-738": [
        "libs/ui-738/src/index.ts"
      ],
      "@acme/ui-739": [
        "libs/ui-739/src/index.ts"
      ],
      "@acme/ui-74": [
        "libs/ui-74/src/index.ts"
      ],
      "@acme/ui-740": [
        "libs/ui-740/src/index.ts"
      ],
      "@acme/ui-741": [
        "libs/ui-741/src/index.ts"
      ],
      "@acme/ui-742": [
        "libs/ui-742/src/index.ts"
      ],
      "@acme/ui-743": [
        "libs/ui-743/src/index.ts"
      ],
      "@acme/ui-744": [
        "libs/ui-744/src/index.ts"
      ],
      "@acme/ui-745": [
        "libs/ui-745/src/index.ts"
      ],
      "@acme/ui-746": [
        "libs/ui-746/src/index.ts"
      ],
      "@acme/ui-747": [
        "libs/ui-747/src/index.ts"
      ],
      "@acme/ui-748": [
        "libs/ui-748/src/index.ts"
      ],
      "@acme/ui-749": [
        "libs/ui-749/src/index.ts"
      ],
      "@acme/ui-75": [
        "libs/ui-75/src/index.ts"
      ],
      "@acme/ui-750": [
        "libs/ui-750/src/index.ts"
      ],
      "@acme/ui-751": [
        "libs/ui-751/src/index.ts"
      ],
      "@acme/ui-752": [
        "libs/ui-752/src/index.ts"
      ],
      "@acme/ui-753": [
        "libs/ui-753/src/index.ts"
      ],
      "@acme/ui-754": [
        "libs/ui-754/src/index.ts"
      ],
      "@acme/ui-755": [
        "libs/ui-755/src/index.ts"
      ],
      "@acme/ui-756": [
        "libs/ui-756/src/index.ts"
      ],
      "@acme/ui-757": [
        "libs/ui-757/src/index.ts"
      ],
      "@acme/ui-758": [
        "libs/ui-758/src/index.ts"
      ],
      "@acme/ui-759": [
        "libs/ui-759/src/index.ts"
      ],
      "@acme/ui-76": [
        "libs/ui-76/src/index.ts"
      ],
      "@acme/ui-760": [
        "libs/ui-760/src/index.ts"
      ],
      "@acme/ui-761": [
        "libs/ui-761/src/index.ts"
      ],
      "@acme/ui-762": [
        "libs/ui-762/src/index.ts"
      ],
      "@acme/ui-763": [
        "libs/ui-763/src/index.ts"
      ],
      "@acme/ui-764": [
        "libs/ui-764/src/index.ts"
      ],
      "@acme/ui-765": [
        "libs/ui-765/src/index.ts"
      ],
      "@acme/ui-766": [
        "libs/ui-766/src/index.ts"
      ],
      "@acme/ui-767": [
        "libs/ui-767/src/index.ts"
      ],
      "@acme/ui-768": [
        "libs/ui-768/src/index.ts"
      ],
      "@acme/ui-769": [
        "libs/ui-769/src/index.ts"
      ],
      "@acme/ui-77": [
        "libs/ui-77/src/index.ts"
      ],
      "@acme/ui-770": [
        "libs/ui-770/src/index.ts"
      ],
      "@acme/ui-771": [
        "libs/ui-771/src/index.ts"
      ],
      "@acme/ui-772": [
        "libs/ui-772/src/index.ts"
      ],
      "@acme/ui-773": [
        "libs/ui-773/src/index.ts"
      ],
      "@acme/ui-774": [
        "libs/ui-774/src/index.ts"
      ],
      "@acme/ui-775": [
        "libs/ui-775/src/index.ts"
      ],
      "@acme/ui-776": [
        "libs/ui-776/src/index.ts"
      ],
      "@acme/ui-777": [
        "libs/ui-777/src/index.ts"
      ],
      "@acme/ui-778": [
        "libs/ui-778/src/index.ts"
      ],
      "@acme/ui-779": [
        "libs/ui-779/src/index.ts"
      ],
      "@acme/ui-78": [
        "libs/ui-78/src/index.ts"
      ],
      "@acme/ui-780": [
        "libs/ui-780/src/index.ts"
      ],
      "@acme/ui-781": [
        "libs/ui-781/src/index.ts"
      ],
      "@acme/ui-782": [
        "libs/ui-782/src/index.ts"
      ],
      "@acme/ui-783": [
        "libs/ui-783/src/index.ts"
      ],
      "@acme/ui-784": [
        "libs/ui-784/src/index.ts"
      ],
      "@acme/ui-785": [
        "libs/ui-785/src/index.ts"
      ],
      "@acme/ui-786": [
        "libs/ui-786/src/index.ts"
      ],
      "@acme/ui-787": [
        "libs/ui-787/src/index.ts"
      ],
      "@acme/ui-788": [
        "libs/ui-788/src/index.ts"
      ],
      "@acme/ui-789": [
        "libs/ui-789/src/index.ts"
      ],
      "@acme/ui-79": [
        "libs/ui-79/src/index.ts"
      ],
      "@acme/ui-790": [
        "libs/ui-790/src/index.ts"
      ],
      "@acme/ui-791": [
        "libs/ui-791/src/index.ts"
      ],
      "@acme/ui-792": [
        "libs/ui-792/src/index.ts"
      ],
      "@acme/ui-793": [
        "libs/ui-793/src/index.ts"
      ],
      "@acme/ui-794": [
        "libs/ui-794/src/index.ts"
      ],
      "@acme/ui-795": [
        "libs/ui-795/src/index.ts"
      ],
      "@acme/ui-796": [
        "libs/ui-796/src/index.ts"
      ],
      "@acme/ui-797": [
        "libs/ui-797/src/index.ts"
      ],
      "@acme/ui-798": [
        "libs/ui-798/src/index.ts"
      ],
      "@acme/ui-799": [
        "libs/ui-799/src/index.ts"
      ],
      "@acme/ui-8": [
        "libs/ui-8/src/index.ts"
      ],
      "@acme/ui-80": [
        "libs/ui-80/src/index.ts"
      ],
      "@acme/ui-800": [
        "libs/ui-800/src/index.ts"
      ],
      "@acme/ui-801": [
        "libs/ui-801/src/index.ts"
      ],
      "@acme/ui-802": [
        "libs/ui-802/src/index.ts"
      ],
      "@acme/ui-803": [
        "libs/ui-803/src/index.ts"
      ],
      "@acme/ui-804": [
        "libs/ui-804/src/index.ts"
      ],
      "@acme/ui-805": [
        "libs/ui-805/src/index.ts"
      ],
      "@acme/ui-806": [
        "libs/ui-806/src/index.ts"
      ],
      "@acme/ui-807": [
        "libs/ui-807/src/index.ts"
      ],
      "@acme/ui-808": [
        "libs/ui-808/src/index.ts"
      ],
      "@acme/ui-809": [
        "libs/ui-809/src/index.ts"
      ],
      "@acme/ui-81": [
        "libs/ui-81/src/index.ts"
      ],
      "@acme/ui-810": [
        "libs/ui-810/src/index.ts"
      ],
      "@acme/ui-811": [
        "libs/ui-811/src/index.ts"
      ],
      "@acme/ui-812": [
        "libs/ui-812/src/index.ts"
      ],
      "@acme/ui-813": [
        "libs/ui-813/src/index.ts"
      ],
      "@acme/ui-814": [
        "libs/ui-814/src/index.ts"
      ],
      "@acme/ui-815": [
        "libs/ui-815/src/index.ts"
      ],
      "@acme/ui-816": [
        "libs/ui-816/src/index.ts"
      ],
      "@acme/ui-817": [
        "libs/ui-817/src/index.ts"
      ],
      "@acme/ui-818": [
        "libs/ui-818/src/index.ts"
      ],
      "@acme/ui-819": [
        "libs/ui-819/src/index.ts"
      ],
      "@acme/ui-82": [
        "libs/ui-82/src/index.ts"
      ],
      "@acme/ui-820": [
        "libs/ui-820/src/index.ts"
      ],
      "@acme/ui-821": [
        "libs/ui-821/src/index.ts"
      ],
      "@acme/ui-822": [
        "libs/ui-822/src/index.ts"
      ],
      "@acme/ui-823": [
        "libs/ui-823/src/index.ts"
      ],
      "@acme/ui-824": [
        "libs/ui-824/src/index.ts"
      ],
      "@acme/ui-825": [
        "libs/ui-825/src/index.ts"
      ],
      "@acme/ui-826": [
        "libs/ui-826/src/index.ts"
      ],
      "@acme/ui-827": [
        "libs/ui-827/src/index.ts"
      ],
      "@acme/ui-828": [
        "libs/ui-828/src/index.ts"
      ],
      "@acme/ui-829": [
        "libs/ui-829/src/index.ts"
      ],
      "@acme/ui-83": [
        "libs/ui-83/src/index.ts"
      ],
      "@acme/ui-830": [
        "libs/ui-830/src/index.ts"
      ],
      "@acme/ui-831": [
        "libs/ui-831/src/index.ts"
      ],
      "@acme/ui-832": [
        "libs/ui-832/src/index.ts"
      ],
      "@acme/ui-833": [
        "libs/ui-833/src/index.ts"
      ],
      "@acme/ui-834": [
        "libs/ui-834/src/index.ts"
      ],
      "@acme/ui-835": [
        "libs/ui-835/src/index.ts"
      ],
      "@acme/ui-836": [
        "libs/ui-836/src/index.ts"
      ],
      "@acme/ui-837": [
        "libs/ui-837/src/index.ts"
      ],
      "@acme/ui-838": [
        "libs/ui-838/src/index.ts"
      ],
      "@acme/ui-839": [
        "libs/ui-839/src/index.ts"
      ],
      "@acme/ui-84": [
        "libs/ui-84/src/index.ts"
      ],
      "@acme/ui-840": [
        "libs/ui-840/src/index.ts"
      ],
      "@acme/ui-841": [
        "libs/ui-841/src/index.ts"
      ],
      "@acme/ui-842": [
        "libs/ui-842/src/index.ts"
      ],
      "@acme/ui-843": [
        "libs/ui-843/src/index.ts"
      ],
      "@acme/ui-844": [
        "libs/ui-844/src/index.ts"
      ],
      "@acme/ui-845": [
        "libs/ui-845/src/index.ts"
      ],
      "@acme/ui-846": [
        "libs/ui-846/src/index.ts"
      ],
      "@acme/ui-847": [
        "libs/ui-847/src/index.ts"
      ],
      "@acme/ui-848": [
        "libs/ui-848/src/index.ts"
      ],
      "@acme/ui-849": [
        "libs/ui-849/src/index.ts"
      ],
      "@acme/ui-85": [
        "libs/ui-85/src/index.ts"
      ],
      "@acme/ui-850": [
        "libs/ui-850/src/index.ts"
      ],
      "@acme/ui-851": [
        "libs/ui-851/src/index.ts"
      ],
      "@acme/ui-852": [
        "libs/ui-852/src/index.ts"
      ],
      "@acme/ui-853": [
        "libs/ui-853/src/index.ts"
      ],
      "@acme/ui-854": [
        "libs/ui-854/src/index.ts"
      ],
      "@acme/ui-855": [
        "libs/ui-855/src/index.ts"
      ],
      "@acme/ui-856": [
        "libs/ui-856/src/index.ts"
      ],
      "@acme/ui-857": [
        "libs/ui-857/src/index.ts"
      ],
      "@acme/ui-858": [
        "libs/ui-858/src/index.ts"
      ],
      "@acme/ui-859": [
        "libs/ui-859/src/index.ts"
      ],
      "@acme/ui-86": [
        "libs/ui-86/src/index.ts"
      ],
      "@acme/ui-860": [
        "libs/ui-860/src/index.ts"
      ],
      "@acme/ui-861": [
        "libs/ui-861/src/index.ts"
      ],
      "@acme/ui-862": [
        "libs/ui-862/src/index.ts"
      ],
      "@acme/ui-863": [
        "libs/ui-863/src/index.ts"
      ],
      "@acme/ui-864": [
        "libs/ui-864/src/index.ts"
      ],
      "@acme/ui-865": [
        "libs/ui-865/src/index.ts"
      ],
      "@acme/ui-866": [
        "libs/ui-866/src/index.ts"
      ],
      "@acme/ui-867": [
        "libs/ui-867/src/index.ts"
      ],
      "@acme/ui-868": [
        "libs/ui-868/src/index.ts"
      ],
      "@acme/ui-869": [
        "libs/ui-869/src/index.ts"
      ],
      "@acme/ui-87": [
        "libs/ui-87/src/index.ts"
      ],
      "@acme/ui-870": [
        "libs/ui-870/src/index.ts"
      ],
      "@acme/ui-871": [
        "libs/ui-871/src/index.ts"
      ],
      "@acme/ui-872": [
        "libs/ui-872/src/index.ts"
      ],
      "@acme/ui-873": [
        "libs/ui-873/src/index.ts"
      ],
      "@acme/ui-874": [
        "libs/ui-874/src/index.ts"
      ],
      "@acme/ui-875": [
        "libs/ui-875/src/index.ts"
      ],
      "@acme/ui-876": [
        "libs/ui-876/src/index.ts"
      ],
      "@acme/ui-877": [
        "libs/ui-877/src/index.ts"
      ],
      "@acme/ui-878": [
        "libs/ui-878/src/index.ts"
      ],
      "@acme/ui-879": [
        "libs/ui-879/src/index.ts"
      ],
      "@acme/ui-88": [
        "libs/ui-88/src/index.ts"
      ],
      "@acme/ui-880": [
        "libs/ui-880/src/index.ts"
      ],
      "@acme/ui-881": [
        "libs/ui-881/src/index.ts"
      ],
      "@acme/ui-882": [
        "libs/ui-882/src/index.ts"
      ],
      "@acme/ui-883": [
        "libs/ui-883/src/index.ts"
      ],
      "@acme/ui-884": [
        "libs/ui-884/src/index.ts"
      ],
      "@acme/ui-885": [
        "libs/ui-885/src/index.ts"
      ],
      "@acme/ui-886": [
        "libs/ui-886/src/index.ts"
      ],
      "@acme/ui-887": [
        "libs/ui-887/src/index.ts"
      ],
      "@acme/ui-888": [
        "libs/ui-888/src/index.ts"
      ],
      "@acme/ui-889": [
        "libs/ui-889/src/index.ts"
      ],
      "@acme/ui-89": [
        "libs/ui-89/src/index.ts"
      ],
      "@acme/ui-890": [
        "libs/ui-890/src/index.ts"
      ],
      "@acme/ui-891": [
        "libs/ui-891/src/index.ts"
      ],
      "@acme/ui-892": [
        "libs/ui-892/src/index.ts"
      ],
      "@acme/ui-893": [
        "libs/ui-893/src/index.ts"
      ],
      "@acme/ui-894": [
        "libs/ui-894/src/index.ts"
      ],
      "@acme/ui-895": [
        "libs/ui-895/src/index.ts"
      ],
      "@acme/ui-896": [
        "libs/ui-896/src/index.ts"
      ],
      "@acme/ui-897": [
        "libs/ui-897/src/index.ts"
      ],
      "@acme/ui-898": [
        "libs/ui-898/src/index.ts"
      ],
      "@acme/ui-899": [
        "libs/ui-899/src/index.ts"
      ],
      "@acme/ui-9": [
        "libs/ui-9/src/index.ts"
      ],
      "@acme/ui-90": [
        "libs/ui-90/src/index.ts"
      ],
      "@acme/ui-900": [
        "libs/ui-900/src/index.ts"
      ],
      "@acme/ui-901": [
        "libs/ui-901/src/index.ts"
      ],
      "@acme/ui-902": [
        "libs/ui-902/src/index.ts"
      ],
      "@acme/ui-903": [
        "libs/ui-903/src/index.ts"
      ],
      "@acme/ui-904": [
        "libs/ui-904/src/index.ts"
      ],
      "@acme/ui-905": [
        "libs/ui-905/src/index.ts"
      ],
      "@acme/ui-906": [
        "libs/ui-906/src/index.ts"
      ],
      "@acme/ui-907": [
        "libs/ui-907/src/index.ts"
      ],
      "@acme/ui-908": [
        "libs/ui-908/src/index.ts"
      ],
      "@acme/ui-909": [
        "libs/ui-909/src/index.ts"
      ],
      "@acme/ui-91": [
        "libs/ui-91/src/index.ts"
      ],
      "@acme/ui-910": [
        "libs/ui-910/src/index.ts"
      ],
      "@acme/ui-911": [
        "libs/ui-911/src/index.ts"
      ],
      "@acme/ui-912": [
        "libs/ui-912/src/index.ts"
      ],
      "@acme/ui-913": [
        "libs/ui-913/src/index.ts"
      ],
      "@acme/ui-914": [
        "libs/ui-914/src/index.ts"
      ],
      "@acme/ui-915": [
        "libs/ui-915/src/index.ts"
      ],
      "@acme/ui-916": [
        "libs/ui-916/src/index.ts"
      ],
      "@acme/ui-917": [
        "libs/ui-917/src/index.ts"
      ],
      "@acme/ui-918": [
        "libs/ui-918/src/index.ts"
      ],
      "@acme/ui-919": [
        "libs/ui-919/src/index.ts"
      ],
      "@acme/ui-92": [
        "libs/ui-92/src/index.ts"
      ],
      "@acme/ui-920": [
        "libs/ui-920/src/index.ts"
      ],
      "@acme/ui-921": [
        "libs/ui-921/src/index.ts"
      ],
      "@acme/ui-922": [
        "libs/ui-922/src/index.ts"
      ],
      "@acme/ui-923": [
        "libs/ui-923/src/index.ts"
      ],
      "@acme/ui-924": [
        "libs/ui-924/src/index.ts"
      ],
      "@acme/ui-925": [
        "libs/ui-925/src/index.ts"
      ],
      "@acme/ui-926": [
        "libs/ui-926/src/index.ts"
      ],
      "@acme/ui-927": [
        "libs/ui-927/src/index.ts"
      ],
      "@acme/ui-928": [
        "libs/ui-928/src/index.ts"
      ],
      "@acme/ui-929": [
        "libs/ui-929/src/index.ts"
      ],
      "@acme/ui-93": [
        "libs/ui-93/src/index.ts"
      ],
      "@acme/ui-930": [
        "libs/ui-930/src/index.ts"
      ],
      "@acme/ui-931": [
        "libs/ui-931/src/index.ts"
      ],
      "@acme/ui-932": [
        "libs/ui-932/src/index.ts"
      ],
      "@acme/ui-933": [
        "libs/ui-933/src/index.ts"
      ],
      "@acme/ui-934": [
        "libs/ui-934/src/index.ts"
      ],
      "@acme/ui-935": [
        "libs/ui-935/src/index.ts"
      ],
      "@acme/ui-936": [
        "libs/ui-936/src/index.ts"
      ],
      "@acme/ui-937": [
        "libs/ui-937/src/index.ts"
      ],
      "@acme/ui-938": [
        "libs/ui-938/src/index.ts"
      ],
      "@acme/ui-939": [
        "libs/ui-939/src/index.ts"
      ],
      "@acme/ui-94": [
        "libs/ui-94/src/index.ts"
      ],
      "@acme/ui-940": [
        "libs/ui-940/src/index.ts"
      ],
      "@acme/ui-941": [
        "libs/ui-941/src/index.ts"
      ],
      "@acme/ui-942": [
        "libs/ui-942/src/index.ts"
      ],
      "@acme/ui-943": [
        "libs/ui-943/src/index.ts"
      ],
      "@acme/ui-944": [
        "libs/ui-944/src/index.ts"
      ],
      "@acme/ui-945": [
        "libs/ui-945/src/index.ts"
      ],
      "@acme/ui-946": [
        "libs/ui-946/src/index.ts"
      ],
      "@acme/ui-947": [
        "libs/ui-947/src/index.ts"
      ],
      "@acme/ui-948": [
        "libs/ui-948/src/index.ts"
      ],
      "@acme/ui-949": [
        "libs/ui-949/src/index.ts"
      ],
      "@acme/ui-95": [
        "libs/ui-95/src/index.ts"
      ],
      "@acme/ui-950": [
        "libs/ui-950/src/index.ts"
      ],
      "@acme/ui-951": [
        "libs/ui-951/src/index.ts"
      ],
      "@acme/ui-952": [
        "libs/ui-952/src/index.ts"
      ],
      "@acme/ui-953": [
        "libs/ui-953/src/index.ts"
      ],
      "@acme/ui-954": [
        "libs/ui-954/src/index.ts"
      ],
      "@acme/ui-955": [
        "libs/ui-955/src/index.ts"
      ],
      "@acme/ui-956": [
        "libs/ui-956/src/index.ts"
      ],
      "@acme/ui-957": [
        "libs/ui-957/src/index.ts"
      ],
      "@acme/ui-958": [
        "libs/ui-958/src/index.ts"
      ],
      "@acme/ui-959": [
        "libs/ui-959/src/index.ts"
      ],
      "@acme/ui-96": [
        "libs/ui-96/src/index.ts"
      ],
      "@acme/ui-960": [
        "libs/ui-960/src/index.ts"
      ],
      "@acme/ui-961": [
        "libs/ui-961/src/index.ts"
      ],
      "@acme/ui-962": [
        "libs/ui-962/src/index.ts"
      ],
      "@acme/ui-963": [
        "libs/ui-963/src/index.ts"
      ],
      "@acme/ui-964": [
        "libs/ui-964/src/index.ts"
      ],
      "@acme/ui-965": [
        "libs/ui-965/src/index.ts"
      ],
      "@acme/ui-966": [
        "libs/ui-966/src/index.ts"
      ],
      "@acme/ui-967": [
        "libs/ui-967/src/index.ts"
      ],
      "@acme/ui-968": [
        "libs/ui-968/src/index.ts"
      ],
      "@acme/ui-969": [
        "libs/ui-969/src/index.ts"
      ],
      "@acme/ui-97": [
        "libs/ui-97/src/index.ts"
      ],
      "@acme/ui-970": [
        "libs/ui-970/src/index.ts"
      ],
      "@acme/ui-971": [
        "libs/ui-971/src/index.ts"
      ],
      "@acme/ui-972": [
        "libs/ui-972/src/index.ts"
      ],
      "@acme/ui-973": [
        "libs/ui-973/src/index.ts"
      ],
      "@acme/ui-974": [
        "libs/ui-974/src/index.ts"
      ],
      "@acme/ui-975": [
        "libs/ui-975/src/index.ts"
      ],
      "@acme/ui-976": [
        "libs/ui-976/src/index.ts"
      ],
      "@acme/ui-977": [
        "libs/ui-977/src/index.ts"
      ],
      "@acme/ui-978": [
        "libs/ui-978/src/index.ts"
      ],
      "@acme/ui-979": [
        "libs/ui-979/src/index.ts"
      ],
      "@acme/ui-98": [
        "libs/ui-98/src/index.ts"
      ],
      "@acme/ui-980": [
        "libs/ui-980/src/index.ts"
      ],
      "@acme/ui-981": [
        "libs/ui-981/src/index.ts"
      ],
      "@acme/ui-982": [
        "libs/ui-982/src/index.ts"
      ],
      "@acme/ui-983": [
        "libs/ui-983/src/index.ts"
      ],
      "@acme/ui-984": [
        "libs/ui-984/src/index.ts"
      ],
      "@acme/ui-985": [
        "libs/ui-985/src/index.ts"
      ],
      "@acme/ui-986": [
        "libs/ui-986/src/index.ts"
      ],
      "@acme/ui-987": [
        "libs/ui-987/src/index.ts"
      ],
      "@acme/ui-988": [
        "libs/ui-988/src/index.ts"
      ],
      "@acme/ui-989": [
        "libs/ui-989/src/index.ts"
      ],
      "@acme/ui-99": [
        "libs/ui-99/src/index.ts"
      ],
      "@acme/ui-990": [
        "libs/ui-990/src/index.ts"
      ],
      "@acme/ui-991": [
        "libs/ui-991/src/index.ts"
      ],
      "@acme/ui-992": [
        "libs/ui-992/src/index.ts"
      ],
      "@acme/ui-993": [
        "libs/ui-993/src/index.ts"
      ],
      "@acme/ui-994": [
        "libs/ui-994/src/index.ts"
      ],
      "@acme/ui-995": [
        "libs/ui-995/src/index.ts"
      ],
      "@acme/ui-996": [
        "libs/ui-996/src/index.ts"
      ],
      "@acme/ui-997": [
        "libs/ui-997/src/index.ts"
      ],
      "@acme/ui-998": [
        "libs/ui-998/src/index.ts"
      ],
      "@acme/ui-999": [
        "libs/ui-999/src/index.ts"
      ]
    }
  },
  builtins: 
    {
      html: [
        {
          template: './src/index.html'
        }
      ]
    }
  
}
const alias = config.resolve.alias;
for(let key in alias){
  alias[key] = path.resolve(__dirname, '../',alias[key][0]);
}
module.exports = config;