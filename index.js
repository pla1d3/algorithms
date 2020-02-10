// +++
// 1 Longest Common Prefix
// https://leetcode.com/problems/longest-common-prefix
// 48 ms, faster than 98.18%
// 33.7 MB, less than 100.00%
// * Найти все совпадения символов строк в массиве от начала
// -> Отсортировать, сравнить первый с последним
var longestCommonPrefix = function(strs) {
    if (!strs.length) return '';
    strs = strs.sort();
    for (let i = 0; i < strs[0].length; i++) {
        if (strs[0][i] !== strs[strs.length - 1][i]) {
            return strs[0].slice(0, i);
        }
    }

    return strs[0];
};

// +++
// 2 Two Sum
// https://leetcode.com/problems/two-sum
// 52 ms, faster than 93.45%
// 34.4 MB, less than 91.74%
// * Найти сумму аргумента между 2 элементами массива
// -> Добавлять в HaspMap вычитаемое, сравнивать с итерацией
var twoSum = function(nums, target) {
    const temp = {};
    for (let i = 0; i < nums.length; i++) {
        if (temp[nums[i]] !== undefined) {
            return [temp[nums[i]], i];
        }
        temp[target - nums[i]] = i;
    }
};

// ***
// 3 Palindrome Number
// https://leetcode.com/problems/palindrome-number
// 188 ms, faster than 75.07%
// 45.6 MB, less than 59.48%
// * Проверка числа на палиндром
// -> Проверка слева-справа
var isPalindrome = function(x) {
    x = x.toString();
    let cl = 0;
    let cr = x.length - 1;

    while (cl < cr) {
        if (x[cl++] !== x[cr--]) {
            return false;
        }
    }

    return true;
};

// ***
// 4 Valid Palindrome
// https://leetcode.com/problems/valid-palindrome
// 64 ms, faster than 91.21%
// 37.8 MB, less than 39.13%
// * Проверка строки на палиндром
// -> Определить является ли символ буквой или цифрой
// -> Проверка слева на права
var isPalindrome = function(s) {
    let cl = 0;
    let cr = s.length - 1;
    
    while (cl < cr) {
        const nl = s[cl].toLowerCase();
        const nr = s[cr].toLowerCase();
        const a = isValidSymbol(nl.charCodeAt());
        const b = isValidSymbol(nr.charCodeAt());

        if (a && b && nl !== nr) {
            return false;
        }

        if (!a && b || a && b || !a && !b) {
            cl++;
        }

        if (!b && a || a && b || !a && !b) {
            cr--;
        }
    }

    return true;
};

function isValidSymbol(sym) {
    return (sym >= 65 && sym <= 90) 
  || (sym >= 97 && sym <= 122)
  || (sym >= 47 && sym <= 57)
  || (sym >= 192 && sym <= 233)
  || (sym >= 224 && sym <= 255);
}

// +++
// 5 Remove Duplicates from Sorted Array
// https://leetcode.com/problems/remove-duplicates-from-sorted-array
// 64 ms, faster than 93.99%
// 36.8 MB, less than 100.00%
// * Удалить дубликаты из отсортированного массива
// -> Сравнивать текущий с предыдущим элементом
// -> Создать элемент который будет считывать валидную позицию
// -> И переставлять элементы, чтобы все дубликаты были в конце
var removeDuplicates = function(nums) {
    if (nums.length <= 1) return nums.length;

    let k = 1;
    for (let i = 1; i < nums.length; i++) {
        if (nums[i] !== nums[i-1]) {
            nums[k++] = nums[i];
        }
    }

    return k;
};

// +++
// 6 Jewels and Stones
// https://leetcode.com/problems/jewels-and-stones
// 44 ms, faster than 99.69%
// 34.1 MB, less than 61.19%
// * Найти совпадения букв в двух строках
// -> Решение с помощью объекта
var numJewelsInStones = function(J, S) {
    J = new Set(J);

    let res = 0;
    for (let i = 0; i < S.length; i++) {
        if (J.has(S[i])) res++;
    }

    return res;
};

// ***
// 7 Remove Outermost Parentheses
// https://leetcode.com/problems/remove-outermost-parentheses
// 56 ms, faster than 87.01%
// 36.1 MB, less than 44.44%
// * 
// ->
var removeOuterParentheses = function(S) {
    let c = 0;
    let r = '';

    for (let i = 0; i < S.length; i++) {
        if (S[i] === '(' && ++c !== 1) r = r + '(';
        if (S[i] === ')' && --c !== 0) r = r + ')';
    }

    return r;
};

// +++
// 8 Robot Return to Origin
// https://leetcode.com/problems/robot-return-to-origin
// 60 ms, faster than 84.78%
// 36.1 MB, less than 66.67%
// * Стартовая и конечная позиция равны
// -> 2 переменные x и y
var judgeCircle = function(moves) {
    let v = 0;
    let h = 0;
    for (let i = 0; i < moves.length; i++) {
        if (moves[i] === 'U') v++;
        if (moves[i] === 'D') v--;
        if (moves[i] === 'L') h++;
        if (moves[i] === 'R') h--;
    }
    return v === 0 && h === 0;
};

// +++
// 9 N-Repeated Element in Size 2N Array
// https://leetcode.com/problems/n-repeated-element-in-size-2n-array
// 56 ms, faster than 94.13%
// 36.2 MB, less than 93.75%
// * Только одно число повторяется
// -> С помощью объекта
var repeatedNTimes = function(A) {
    const tmp = {};
    for (let i = 0; i < A.length; i++) {
        if (tmp[A[i]]) return A[i];
        tmp[A[i]] = true;
    }
    return -1;
};

// +++
// 10 Sort Array By Parity
// https://leetcode.com/problems/sort-array-by-parity
// 72 ms, faster than 91.35%
// 37.2 MB, less than 28.00%
// * Одна часть состоит из четных другая из нечетных
// -> Два индекса, первый для четных, второй для нечетных
// -> Находим четное свапаем и перемещаем индекатор для четных
var sortArrayByParity = function(A) {
    for (let i = 0, j = 0; j < A.length; j++) {
        if (A[j] % 2 === 0) {
            const tmp = A[i];
            A[i] = A[j];
            A[j] = tmp;
            i++;
        }
    }
    return A;
};

// +++
// 11 Peak Index in a Mountain Array
// https://leetcode.com/problems/peak-index-in-a-mountain-array
// 52 ms, faster than 86.43%
// 34.9 MB, less than 70.00%
// * Найти пиковый индекс в массиве
// -> Если пред. и след. меньше
var peakIndexInMountainArray = function(A) {
    for (let i = 0; i < A.length; i++) {
        if (A[i - 1] < A[i] && A[i + 1] < A[i]) {
            return i;
        }
    }
};

// ***
// 12 Relative Sort Array
// https://leetcode.com/problems/relative-sort-array
// 56 ms, faster than 82.68%
// 35.2 MB, less than 100.00%
// * Отсортировать по индексам второго массива
// * arr1 = [2,3,1,3,2,4,6,7,9,2,19], arr2 = [2,1,4,3,9,6]
// * return [2,2,2,1,4,3,3,9,6,7,19]
// ->
// ->
// ->
// ->
var relativeSortArray = function(arr1, arr2) {
    const cnt = [];
    for (let i = 0; i < arr1.length; ++i) {
        cnt[arr1[i]] = cnt[arr1[i]] + 1 || 1;
    }

    let idx = 0;
    for (let i = 0; i < arr2.length; i++) {
        while (cnt[arr2[i]]--) {
            arr1[idx++] = arr2[i];
        }
    }

    for (let i = 0; i < cnt.length; i++) {
        while (cnt[i]-- > 0) {
            arr1[idx++] = i;
        }
    }

    return arr1;
};

// +++
// 13 Reverse String
// https://leetcode.com/problems/reverse-string
// 104 ms, faster than 95.04%
// 46.7 MB, less than 60.00%
// Перевернуть массив за O(1)
// С помощью метода 3 стаканов, до середены массива
var reverseString = function(s) {
    for (let i = 0; i < s.length / 2; i++) {
        const temp = s[i];
        s[i] = s[s.length - i - 1];
        s[s.length - i - 1] = temp;
    }
    return s;
};

// +++
// 14 Occurrences After Bigram
// https://leetcode.com/problems/occurrences-after-bigram
// 44 ms, faster than 98.02%
// 34 MB, less than 100.00%
// *
// ->
var findOcurrences = function(text, first, second) {
    text = text.split(' ');
    const res = [];

    for (let i = 0; i < text.length - 2; i++) {
        if (text[i] === first && text[i + 1] === second) {
            res.push(text[i + 2]);
        }
    }

    return res;
};

// +++
// 15 Uncommon Words from Two Sentences
// https://leetcode.com/problems/uncommon-words-from-two-sentences
// 48 ms, faster than 96.35%
// 34 MB, less than 100.00%
// * Убрать все дубликаты из двух строк
// -> Сделать один большой объект
// -> Считать кол-во каждых слов
// -> В результат добавить только слова === 1
var uncommonFromSentences = function(A, B) {
    A = (A + ' ' + B).split(' ').reduce((acc, item) => {
        acc[item] = acc[item] + 1 || 1;
        return acc;
    }, {});

    const res = [];
    for (let key in A) {
        if (A[key] === 1) res.push(key);
    }

    return res;
};

// ***
// 16 Single Number
// https://leetcode.com/problems/single-number
// 56 ms, faster than 87.89%
// 35.2 MB, less than 100.00%
// ***
// ***
var singleNumber = function(nums) {
    let sin;
    nums.forEach(i => sin ^= i);
    return sin;
};

// ***
// 17 Unique Number of Occurrences
// https://leetcode.com/problems/unique-number-of-occurrences
// 52 ms, faster than 87.68%
// 34.3 MB, less than 100.00%
// ***
// ***
const uniqueOccurrences = arr => {
    const res = {}
    for(let i = 0; i < arr.length; i++) {
        res[arr[i]] = res[arr[i]] + 1 || 1;
    }

    const values = Object.values(res);
    return new Set(values).size === values.length;
}

// +++
// 18 Split a String in Balanced Strings
// https://leetcode.com/problems/split-a-string-in-balanced-strings
// 52 ms, faster than 87.42%
// 34 MB, less than 100.00%
// * RLRRLLRLRL => "RL", "RRLL", "RL", "RL"
// -> Создать переменную, ++ если равно R, иначе --
// -> Если она равно 0, прибавить результат
var balancedStringSplit = function(s) {
    let res = 0;
    let counter = 0;
    for (let i = 0; i < s.length; i++) {
        if(s[i] === 'R') counter++;
        else counter--;
        if (!counter) res++;
    }
    return res;
};

// +-
// 19 Find Words That Can Be Formed by Characters
// https://leetcode.com/problems/find-words-that-can-be-formed-by-characters
// 220 ms, faster than 43.10%
// 40.2 MB, less than 100.00%
var countCharacters = function(words, chars) {
    chars = chars.split('').reduce((acc, item) => {
       acc[item] = acc[item] + 1 || 1;
        return acc;
    }, {});
    
    let res = 0;
    for (let i = 0; i < words.length; i++) {
        res += finder(words[i], { ...chars });
    }
    
    return res;
};

const finder = (arr, chars) => {
    for (let i = 0; i < arr.length; i++) {
        if (!chars[arr[i]]--) return 0;
    }
    return arr.length;
};

// ***
// 20 Unique Morse Code Words
// https://leetcode.com/problems/unique-morse-code-words
// 52 ms, faster than 96.80%
// 35.5 MB, less than 55.56%
var uniqueMorseRepresentations = function(words) {
    const morse = [
        ".-", "-...", "-.-.", "-..", ".", "..-.",
        "--.", "....", "..", ".---", "-.-", ".-..",
        "--", "-.", "---", ".--.", "--.-", ".-.",
        "...", "-", "..-", "...-", ".--", "-..-",
        "-.--", "--.."
    ];
    
    let res = {};
    for (let i = 0; i < words.length; i++) {
        let iter = '';
        for (let g = 0; g < words[i].length; g++) {
            iter += morse[words[i][g].charCodeAt()-97];
        }
        res[iter] = true;
    }

    return Object.keys(res).length;
};

// +-
// 21 Shortest Distance to a Character
// https://leetcode.com/problems/shortest-distance-to-a-character
// 64 ms, faster than 82.04%
// 35.1 MB, less than 100.00%
// *
var shortestToChar = function(S, C) {
    const answer = [];
    let pos = -10000;

    for (let i = 0; i < S.length; i++) {
        if(S[i] == C) pos = i;
        answer[i] = i - pos;
    }

    for (let i = pos; i >= 0; i--) {
        if(S[i] == C) pos = i;
        answer[i] = Math.min(answer[i], pos - i);
    }

    return answer;
}

// ***
// 22 Squares of a Sorted Array
// https://leetcode.com/problems/squares-of-a-sorted-array
// 116 ms, faster than 81.84%
// 42.3 MB, less than 92.59%
// * Вернуть отсортированный массив квадратов начального массива
// -> Создать массив результатов, 2 маркера
// -> Добавлять в новый массив элемент который больше по маркеру
var sortedSquares = function(A) {
    const n = A.length;
    let result = new Array(n);
    let i = 0, j = n - 1;

    for (let p = n - 1; p >= 0; p--) {
        if (Math.abs(A[i]) > Math.abs(A[j])) {
            result[p] = A[i] * A[i];
            i++;
        } else {
            result[p] = A[j] * A[j];
            j--;
        }
    }

    return result;
};

// bad
// 23 Subdomain Visit Count
// https://leetcode.com/problems/subdomain-visit-count
// 84 ms, faster than 51.20%
// 38.6 MB, less than 67.65%
var subdomainVisits = function(cpdomains) {
    const res = {};
    
    for (let i = 0; i < cpdomains.length; i++) {
        const iter = cpdomains[i].split(' ');
        const sub = iter[1].split('.');
        while (sub.length) {
            res[sub.join('.')] = res[sub.join('.')] + +iter[0] || +iter[0];
            sub.shift();
        }
    }
    
    return Object.keys(res).reduce((acc, key) => {
        acc.push(res[key] + ' ' + key);
        return acc;
    }, []);
};

// ***
// 24 Sort Array By Parity II
// https://leetcode.com/problems/sort-array-by-parity-ii
// 76 ms, faster than 100.00%
// 38.4 MB, less than 100.00%
// * Отсортировать массив в формате четный-нечетный
// -> Создать 2 маркета 0 и 1
// -> Если первый маркер % 2 !== 0 свапнуть и прибавить на 2 второй
// -> если нет то на 2 первый
/*
        e  o
    [4][2] 5  7  3  2
        o  e
     4 [2][5] 7  3  2
           e  o
     4  5 [2][7] 3  2
              o  e
     4  5  2 [7][3] 2
                 e  o
     4  5  2  3 [7][2]
     -----------------
     4  5  2  3  2  7
*/
var sortArrayByParityII = function(A) {
    let e = 0;
    let o = 1;

    while (e < A.length && o < A.length) {
        if (A[e] % 2 !== 0) {
            A.swap(e, o);
            o += 2;
        } else {
            e += 2;
        }
    }

    return A;
};

Array.prototype.swap = function(a, b) {
    const tmp = this[a];
    this[a] = this[b];
    this[b] = tmp;
    return this;
};

// ***
// 25 Delete Columns to Make Sorted
// https://leetcode.com/problems/delete-columns-to-make-sorted
// 72 ms, faster than 72.51%
// 39.4 MB, less than 100.00%
var minDeletionSize = function(A) {
    let minDel = 0;
    let r = A.length;
    let c = A[0].length;

    for(let j = 0; j < c; j++)
    {
        for(let i = 1; i < r; i++)
        {
            if(A[i][j] < A[i-1][j])
            {
                minDel++;
                break;
            }
        }
    }

    return minDel;
};

// bad
// 26 Unique Email Addresses
// https://leetcode.com/problems/unique-email-addresses
// 76 ms, faster than 78.87%
// 43.1 MB, less than 16.67%
var numUniqueEmails = function(emails) {
    const res = new Set();

    for (let i = 0; i < emails.length; i++) {
        let checkPlus = -1;
        let checkMail = -1;
        let iter = emails[i].split('');

        for (let j = 0; j < iter.length; j++) {
            if (checkMail === -1 && iter[j] === '.') {
                iter.splice(j, 1);
            }
            if (iter[j] === '+' && checkPlus === -1) {
                checkPlus = j;
            }
            if (iter[j] === '@') checkMail = j;
        }

        if (checkPlus !== -1 && checkMail !== -1) {
            iter.splice(checkPlus, checkMail - checkPlus);
        }
        res.add(iter.join(''));
    }

    return res.size;
};

// ***
// 27 Height Checker
// https://leetcode.com/problems/height-checker
// 64 ms, faster than 48.75%
// 35 MB, less than 100.00%
var heightChecker = function(heights) {
    let cnt = 0;
    let sort = heights.slice().sort((a,b)=> a - b);
    for (let i = 0; i < heights.length; i++){
        if (heights[i] !== sort[i]) cnt++;
    }
    return cnt;
};

// ***
// 28 Find Common Characters
// https://leetcode.com/problems/find-common-characters
// 56 ms, faster than 98.56%
// 36.3 MB, less than 92.86%
/*
    bella
    temp = [b 1 e 1 l 2 a 1]

    move alphabet 0 -> 26
    [b 1 e 1 l 2 a 1]
    ------
    label
    temp = [b 1 e 1 l 2 a 1]

    move alphabet 0 -> 26
    [b 1 e 1 l 2 a 1]
    ------
    roller
    temp = [r 2 o 1 l 2 e 1]

    move alphabet 0 -> 26
    [b 0 a 0 e 1 l 2]
*/
var commonChars = function(A) {
    const cnt = new Array(26).fill(Infinity);
    const res = [];

    for (let s of A) {
        const cnt1 = new Array(26).fill(0);
        for (let c of s) {
            ++cnt1[c.charCodeAt() - 97];
        }
        for (let i = 0; i < 26; i++) {
            cnt[i] = Math.min(cnt[i], cnt1[i]);
        }
    }

    for (let i = 0; i < 26; i++) {
        for (let j = 0; j < cnt[i]; j++) {
            res.push(String.fromCharCode(i + 97));
        }
    }

    return res;
};

// ***
// 29 Distribute Candies
// https://leetcode.com/problems/distribute-candies
// 136 ms, faster than 65.28%
// 43.8 MB, less than 100.00%
var distributeCandies = function(candies) {
    return Math.min(new Set(candies).size, candies.length / 2);
};

// +++
// 30 Monotonic Array
// https://leetcode.com/problems/monotonic-array
// 64 ms, faster than 97.55%
// 40.5 MB, less than 60.00%
var isMonotonic = function(A) {
    let up = false;
    let down = false;
    for (let i = 1; i < A.length; i++) {
        if (A[i] < A[i - 1]) down = true;
        if (A[i] > A[i - 1]) up = true;
        if (up && down) return false;
    }
    return true;
};

// +++
// 31 Reverse Only Letters
// https://leetcode.com/problems/reverse-only-letters
// 52 ms, faster than 84.64%
// 33.8 MB, less than 75.00%
var reverseOnlyLetters = function(S) {
    let l = 0;
    let r = S.length - 1;
    S = S.split('');

    while (l < r) {
        const a = S[l].toLowerCase() !== S[l].toUpperCase();
        const b = S[r].toLowerCase() !== S[r].toUpperCase();

        if (a && b) S.swap(l, r);
        if (!a && b || a && b || !a && !b) l++;
        if (a && !b || a && b || !a && !b) r--;
    }

    return S.join('');
};

Array.prototype.swap = function(a, b) {
    const tmp = this[a];
    this[a] = this[b];
    this[b] = tmp;
    return this;
};

// +++
// 32 Goat Latin
// https://leetcode.com/problems/goat-latin
// 48 ms, faster than 95.06%
// 34 MB, less than 100.00%
var toGoatLatin = function(S) {
    const symbpls = new Set('a,e,i,o,e,u');
    S = S.split(' ');
    
    for (let i = 0; i < S.length; i++) {
        if (!symbpls.has(S[i][0].toLowerCase())) {
            S[i] = S[i].slice(1) + S[i][0];
        }
        S[i] += 'm' + 'a'.repeat(i + 2);
    }
    
    return S.join(' ');
};

// +++
// 33 Remove All Adjacent Duplicates In String
// https://leetcode.com/problems/remove-all-adjacent-duplicates-in-string
// 76 ms, faster than 72.86%
// 42.9 MB, less than 100.00%
var removeDuplicates = function(S) {
    const res = [];
    for (let i = 0; i < S.length; i++) {
        if (res[res.length - 1] === S[i]) {
            res.pop();
        } else {
            res.push(S[i]);
        }
    }
    return res.join('');
};

// ***
// 34 Maximum Number of Balloons
// https://leetcode.com/problems/maximum-number-of-balloons
// 60 ms, faster than 74.20%
// 35.2 MB, less than 100.00%
// *
var maxNumberOfBalloons = function(text) {
    const symbols = { 'b': 0, 'a': 0, 'l': 0, 'o': 0, 'n': 0 };

    for (let i = 0; i < text.length; i++) {
        if (symbols[text[i]] !== undefined) {
            symbols[text[i]]++;
        }
    }

    const res = Object.keys(symbols).reduce((acc, key) => {
        if (key === 'l' || key === 'o') {
            return Math.min(Math.floor(symbols[key] / 2), acc);
        }
        return Math.min(symbols[key], acc);
    }, Infinity);

    if (res === Infinity) return 0;
    return res;
};

// ***
// 35 Move Zeroes
// https://leetcode.com/problems/move-zeroes
// 60 ms, faster than 85.76%
// 35.6 MB, less than 89.36%
var moveZeroes = function(nums) {
    let curIndex = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== 0) {
            nums.swap(i, curIndex);
            curIndex++;
        }
    }
};

Array.prototype.swap = function(a, b) {
    const tmp = this[a];
    this[a] = this[b];
    this[b] = tmp;
    return this;
}

// !!!bad!!!
// 36 Letter Case Permutation
// https://leetcode.com/problems/letter-case-permutation
// 84 ms, faster than 26.25%
// 38.2 MB, less than 33.33%
var letterCasePermutation = function(S) {
    const res = [S.toLowerCase()];

    for (let i = 0; i < S.length; i++) {
        if (isNaN(S[i])) {
            const curLength = res.length;
            for (let j = 0; j < curLength; j++) {
                const iter = res[j].split('');
                iter[i] = iter[i].toUpperCase();
                res.push(iter.join(''));
            }
        }
    }

    return res;
};

// +++
// 37 Max Consecutive Ones
// https://leetcode.com/problems/max-consecutive-ones
// 56 ms, faster than 97.80%
// 36.9 MB, less than 100.00%
var findMaxConsecutiveOnes = function(nums) {
    let max = 0;
    let curMax = 0;

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === 1) curMax++;
        else curMax = 0;
        max = Math.max(max, curMax);
    }

    return max;
};

// +++
// 38 Majority Element
// https://leetcode.com/problems/majority-element
// 52 ms, faster than 98.26%
// 37.1 MB, less than 92.86%
var majorityElement = function(nums) {
    nums = nums.reduce((acc, item) => {
        acc[item] = acc[item] + 1 || 1;
        return acc;
    }, {});

    let max;
    for (let key in nums) {
        if (!max || nums[key] > nums[max]) {
            max = key;
        }
    }

    return +max;
};

// +++
// 39 Contains Duplicate
// https://leetcode.com/problems/contains-duplicate
// 56 ms, faster than 96.98%
// 40 MB, less than 88.24%
var containsDuplicate = function(nums) {
    return new Set(nums).size !== nums.length;
};

// +++
// 40 Valid Anagram
// https://leetcode.com/problems/valid-anagram
// 56 ms, faster than 98.79%
// 35.9 MB, less than 89.80%
var isAnagram = function(s, t) {
    if (s.length !== t.length) return false;

    const words = new Array(26).fill(0);
    for (let i = 0; i < s.length; i++) {
        words[s[i].charCodeAt() - 97]++;
    }
    for (let i = 0; i < t.length; i++) {
        words[t[i].charCodeAt() - 97]--;
    }
    for (let i = 0; i < words.length; i++) {
        if (words[i] !== 0) return false;
    }

    return true;
};

// +++
// 41 Find the Difference
// https://leetcode.com/problems/find-the-difference
// 56 ms, faster than 87.61%
// 35.5 MB, less than 100.00%
var findTheDifference = function(s, t) {
    let words = new Array(26).fill(0);
    for (let i = 0; i < s.length; i++) {
        words[s[i].charCodeAt() - 97]++;
    }
    for (let i = 0; i < t.length; i++) {
        words[t[i].charCodeAt() - 97]--;
    }
    for (let i = 0; i < words.length; i++) {
        if (words[i] !== 0) return String.fromCharCode(i + 97);
    }
};

// ***
// 42 Roman to Integer
// https://leetcode.com/problems/roman-to-integer
// 148 ms, faster than 53.63%
// 40 MB, less than 44.68%
var romanToInt = function(s) {
    let sum = 0;
    const rom = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000
    }

    for (let i = 0; i < s.length; i++) {
        if (rom[s[i]] < rom[s[i + 1]]) {
            sum -= rom[s[i]];
        } else {
            sum += rom[s[i]];
        }
    }
    
    return sum;
};

// +-
// 43 Two Sum II - Input array is sorted
// https://leetcode.com/problems/two-sum-ii-input-array-is-sorted
// 52 ms, faster than 91.70%
// 35.2 MB, less than 52.17%
// *
// #2
var twoSum = function(numbers, target) {
    
    const temp = {};
    for (let i = 0; i < numbers.length; i++) {
        if (temp[numbers[i]] !== undefined) {
            return [temp[numbers[i]] + 1, i + 1];
        } else {
            temp[target - numbers[i]] = i;
        }
    }
    
};

// #2
var twoSum = function(numbers, target) {
    let l = 0;
    let r = numbers.length - 1;

    while(l < r){
        if (numbers[l] + numbers[r] === target) {
            return [l + 1, r + 1];
        }
        if (numbers[l] + numbers[r] > target) {
            r--;
        } else {
            l++;
        }
    }
};
//======================================================

// +-
// 44 Missing Number
// https://leetcode.com/problems/missing-number
// 56 ms, faster than 91.00%
// 36.1 MB, less than 74.29%
var missingNumber = function(nums) {
    let sum = 0;
    for (let i = 0; i < nums.length; i++) {
        sum += nums[i];
    }

    return (nums.length * (nums.length + 1)) / 2 - sum;
};

// +++
// 45
// https://leetcode.com/problems/first-unique-character-in-a-string
// 72 ms, faster than 96.64%
// 38.1 MB, less than 75.00%
var firstUniqChar = function(s) {
    const symbols = new Array(26).fill(false);
    for(let i = 0; i < s.length; i++) {
        symbols[s[i].charCodeAt() - 97]++;
    }
    for(let i = 0; i < s.length; i++) {
        if(symbols[s[i].charCodeAt() - 97] === 1) {
            return i;
        }
    }
    return -1;
};

// +++
// 46 Intersection of Two Arrays II
// https://leetcode.com/problems/intersection-of-two-arrays-ii
// 52 ms, faster than 95.33%
// 34.2 MB, less than 88.89%
var intersect = function(nums1, nums2) {
    nums1 = nums1.reduce((acc, item) => {
        acc[item] = acc[item] + 1 || 1;
        return acc;
    }, {});

    const res = [];
    for (let i = 0; i < nums2.length; i++) {
        if (nums1[nums2[i]]) {
            res.push(nums2[i]);
            nums1[nums2[i]]--;
        }
    }

    return res;
};

// ***
// 47 Binary Search
// https://leetcode.com/problems/binary-search
// 52 ms, faster than 96.33%
// 36.8 MB, less than 64.29%
var search = function(nums, target) {
    if (nums == null || nums.length == 0) {
        return -1;
    }

    let start = 0, end = nums.length - 1;
    while (start <= end) {
        const mid = Math.round(start + (end - start) / 2);
        if (nums[mid] === target) return mid;
        else if (nums[mid] < target) start = mid + 1;
        else end = mid - 1;
    }

    return -1;
};

// 48 Fibonacci Number
// https://leetcode.com/problems/fibonacci-number
// 60 ms, faster than 45.97%
// 33.9 MB, less than 68.18%
var fib = function(N) {
    if (N <= 1) return N;
    let arr = [0, 1];

    while (N-- > 1) {
        arr = [arr[1], arr[0] + arr[1]];
    }

    return arr[1];
};

// 49 DI String Match
// https://leetcode.com/problems/di-string-match
// 72 ms, faster than 97.68%
// 37.1 MB, less than 100.00%
var diStringMatch = function(S) {
    const A = new Array(S.length + 1);
    let a = 0;
    let b = S.length;

    for (let i = 0; i < S.length; ++i) {
        if(S[i] == 'I') {
            A[i] = a++;
        } else {
            A[i] = b--;
        }
    }

    A[A.length - 1] = b--;
    return A;
};

// 50 Keyboard Row
// https://leetcode.com/problems/keyboard-row
// 52 ms, faster than 69.87%
// 33.8 MB, less than 87.50%
var findWords = function(words) {
    const line1 = new Set('qwertyuiop');
    const line2 = new Set('asdfghjkl');
    const line3 = new Set('zxcvbnm');

    for (let i = 0; i < words.length; i++) {
        let a = 0, b = 0, c = 0;
        for (let j = 0; j < words[i].length; j++) {
            if (line1.has(words[i][j])) a = 1;
            if (line2.has(words[i][j])) b = 1;
            if (line3.has(words[i][j])) c = 1;
        }

        if ((a + b + c) !== 1) {
            words.splice(i, 1);
            i--;
        }
    }

    return words;
};

// 51 Duplicate Zeros
// https://leetcode.com/problems/duplicate-zeros
// 68 ms, faster than 79.17%
// 35.7 MB, less than 100.00%
var duplicateZeros = function(arr) {
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] === 0) {
            i++;
            arr.splice(i, 0, 0);
            arr.pop();
        }
    }
};

// 52 Intersection of Two Arrays
// https://leetcode.com/problems/intersection-of-two-arrays
// 48 ms, faster than 97.63%
// 34.1 MB, less than 92.31%
var intersection = function(nums1, nums2) {
    let res = new Set();
    nums1 = new Set(nums1);
    for (let i = 0; i < nums2.length; i++) {
        if (nums1.has(nums2[i])) {
            res.add(nums2[i]); 
        }
    }
    return Array.from(res);
};

// 53 Student Attendance Record I
// https://leetcode.com/problems/student-attendance-record-i
// 44 ms, faster than 99.15%
// 33.9 MB, less than 100.00%
var checkRecord = function(s) {
    let a = 0, l = 0;

    for (let i = 0; i < s.length; i++) {
        if (s[i] === 'A') a++;
        if (s[i] === 'L') l++;
        else l = 0;
        if (a > 1 || l > 2) return false;
    }

    return true;
};

// 54 Set Mismatch
// https://leetcode.com/problems/set-mismatch
// 72 ms, faster than 72.85%
// 40.4 MB, less than 100.00%
var findErrorNums = function(nums) {
    const set = new Set();
    let duplicate = 0, n = nums.length;
    let sum = (n * (n + 1)) / 2;

    for(let i of nums) {
        if (set.has(i)) duplicate = i;
        sum -= i;
        set.add(i);
    }

    return [duplicate, sum + duplicate];
};

// 55 Maximum Subarray
// https://leetcode.com/problems/maximum-subarray
// 64 ms, faster than 44.81%
// 35.1 MB, less than 83.33%
var maxSubArray = function(nums) {
    let maxCurrent = nums[0];
    let maxGlobal = nums[0];

    for (let i = 1; i < nums.length ; i++) {
      maxCurrent = Math.max(nums[i], maxCurrent + nums[i]);
      if (maxCurrent > maxGlobal) {
        maxGlobal = maxCurrent;
      }
    }

    return maxGlobal;
};

// 56 Longest Continuous Increasing Subsequence
// https://leetcode.com/problems/longest-continuous-increasing-subsequence
// 56 ms, faster than 73.19%
// 35.1 MB, less than 100.00%
var findLengthOfLCIS = function(nums) {
    if (!nums || nums.length === 0) return 0;

    let count = 1;
    let cur = 1;
    for (let i = 1; i <= nums.length; i++) {
       if (nums[i] > nums[i - 1]) {
            cur++;
            count = Math.max(count, cur);
        } else {
            cur = 1;
        }
    }

    return count;
};

// 57 Find Smallest Letter Greater Than Target
// https://leetcode.com/problems/find-smallest-letter-greater-than-target
// 64 ms, faster than 67.15%
// 36.3 MB, less than 100.00%
var nextGreatestLetter = function(letters, target) {
    let left = 0
    let right = letters.length - 1

    while (left < right) {
        const mid = Math.floor((right - left) / 2) + left
        if (letters[mid] > target) {
            right = mid
        } else {
            left = mid + 1
        }
    }

    return letters[left] <= target ? letters[0] : letters[left]
};

// 58 Long Pressed Name
// https://leetcode.com/problems/long-pressed-name
// 52 ms, faster than 86.93%
// 35.6 MB, less than 100.00%
var isLongPressedName = function(name, typed) {
    let a = 0;
    let b = 0;

    while(a < typed.length) {
        if (name[a] !== typed[b]) {
            if (name[a - 1] === typed[b]) a--;
            else return false;
        }
        a++;
        b++;
    }

    return true;
};

// 59 Reverse Vowels of a String
// https://leetcode.com/problems/reverse-vowels-of-a-string
// 72 ms, faster than 89.55%
// 39.3 MB, less than 92.86%
var reverseVowels = function(s) {
    let start = 0, end = s.length - 1;
    const vowels = new Set('aeiouAEIOU');
    s = s.split('');

    while (start < end) {
        if (vowels.has(s[start]) && !vowels.has(s[end])) start--;
        if (vowels.has(s[end]) && !vowels.has(s[start])) end++;
        if (vowels.has(s[start]) && vowels.has(s[end])) s.swap(start, end);
        start++;
        end--;
    }

    return s.join('');
};

Array.prototype.swap = function(a, b) {
    let tmp = this[a];
    this[a] = this[b];
    this[b] = tmp;
    return this;
}

// 60 Longest Palindrome
// https://leetcode.com/problems/longest-palindrome
// 52 ms, faster than 96.97%
// 35.5 MB, less than 60.00%
var longestPalindrome = function(s) {
    const a = new Array(300).fill(0);
    for (let i = 0; i < s.length; i++) {
        a[s[i].charCodeAt()]++;
    }

    let maxSize = 0;
    let center = false;
    for (let i = 0; i < a.length; i++) {
        if (!center && a[i] % 2 !== 0) {
            center = true;
            maxSize++;
        }
        if (a[i] >= 2) {
            if (a[i] % 2 === 0) maxSize += a[i];
            else maxSize += a[i] - 1;
        }
    }

    return maxSize;
};

// 61 Find All Numbers Disappeared in an Array
// https://leetcode.com/problems/find-all-numbers-disappeared-in-an-array
// 120 ms, faster than 54.17%
// 53.2 MB, less than 12.50%
var findDisappearedNumbers = function(nums) {
    const length = nums.length;
    nums = new Set(nums);

    const res = [];
    for (let i = 1; i <= length; i++) {
        if (!nums.has(i)) res.push(i);
    }

    return res;
};

// 62 Ransom Note
// https://leetcode.com/problems/ransom-note
// 64 ms, faster than 93.43%
// 36.7 MB, less than 100.00%
var canConstruct = function(ransomNote, magazine) {
    const wordsRN = new Array(26).fill(0);
    for (let i = 0; i < ransomNote.length; i++) {
        wordsRN[ransomNote[i].charCodeAt() - 97]++;
    }

    const wordsMagazine = new Array(26).fill(0);
    for (let i = 0; i < magazine.length; i++) {
        wordsMagazine[magazine[i].charCodeAt() - 97]++;
    }

    for (let i = 0; i < ransomNote.length; i++) {
        const iter = ransomNote[i].charCodeAt() - 97;
        if (wordsMagazine[iter] < wordsRN[iter]) {
            return false;
        }
    }

    return true;
};

// 63 String Compression
// https://leetcode.com/problems/string-compression
// 52 ms, faster than 99.83%
// 37.3 MB, less than 100.00%
var compress = function(str) {
    let cur = 0;
    let stepCount = 1;

    for (let i = 1; i <= str.length; i++) {
        if (str[i] !== str[i - 1]) {
            str[cur++] = str[i - 1];
            if (stepCount > 1) {
                const stepArr = stepCount.toString().split('');
                for (let j = 0; j < stepArr.length; j++) {
                    str[cur++] = stepArr[j];
                }
            }
            stepCount = 1;
        } else {
            stepCount++;
        }
    }

    while (cur !== str.length) {
        str.pop();
    }
};

// 64 Excel Sheet Column Number
// https://leetcode.com/problems/excel-sheet-column-number
// 76 ms, faster than 47.13%
// 34.8 MB, less than 100.00%
var titleToNumber = function(s) {
    let result = 0;
    for (let i = 0 ; i < s.length; i++) {
      result = result * 26 + ((s[i].charCodeAt() - 65) + 1);
    }
    return result;
};

// 65 Partition Array Into Three Parts With Equal Sum
// https://leetcode.com/problems/partition-array-into-three-parts-with-equal-sum
// 68 ms, faster than 75.00%
// 39.7 MB, less than 100.00%
var canThreePartsEqualSum = function(A) {
    let sum = 0;
    for (let i = 0; i < A.length; i++) sum += A[i];
    if (sum % 3 !== 0) return false;

    let sumIter = 0;
    let parts = 0;
    for (let i = 0; i < A.length; i++) {
        sumIter += A[i];
        if (sumIter === sum / 3) {
            parts++;
            sumIter = 0;
        }
    }

    return parts === 3;
};

// 66 Positions of Large Groups
// https://leetcode.com/problems/positions-of-large-groups
// 68 ms, faster than 87.00%
// 37.3 MB, less than 25.00%
var largeGroupPositions = function(S) {
    const arr = [];
    let step = 1;
    for (let i = 1; i <= S.length; i++) {
        if (S[i] === S[i - 1]) {
            step++;
        } else {
            if (step >= 3) arr.push([i - step, i - 1]);
            step = 1;
        }
    }
    return arr;
};

// 67 Element Appearing More Than 25% In Sorted Array
// https://leetcode.com/problems/element-appearing-more-than-25-in-sorted-array
// 48 ms, faster than 96.00%
// 36 MB, less than 100.00%
var findSpecialInteger = function(arr) {
    let count = 0;
    let res;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i - 1] && arr[i] !== arr[i - 1]) count = 1;
        else count++;
        if (count / arr.length > 0.25) return arr[i];
    }
};

// 68 Shortest Completing Word
// https://leetcode.com/problems/shortest-completing-word
// 72 ms, faster than 76.38%
// 37.8 MB, less than 100.00%
var shortestCompletingWord = function(licensePlate, words) {
    let countSymbols = 0;
    const symbols = new Array(26).fill(0);
    for (let i = 0; i < licensePlate.length; i++) {
        if (licensePlate[i].toLowerCase() !== licensePlate[i].toUpperCase()) {
            symbols[licensePlate[i].toLowerCase().charCodeAt() - 97]++;
            countSymbols++;
        }
    }

    let res = '';
    for (let i = 0; i < words.length; i++) {
        let count = 0;
        const tmpSymbols = new Array(26).fill(0);
        for (let j = 0; j < words[i].length; j++) {
            const iter = words[i][j].charCodeAt() - 97;
            if (tmpSymbols[iter] < symbols[iter]) {
                tmpSymbols[iter]++;
                count++;
            }
        }
        if (count === countSymbols && (words[i].length < res.length || !res)) {
            res = words[i];
        }
    }

    return res;
};

// 69 Number of Segments in a String
// https://leetcode.com/problems/number-of-segments-in-a-string/solution
// 44 ms, faster than 96.48%
// 33.9 MB, less than 40.00%
var countSegments = function(s) {
    let res = 0;
    for(let i = 0; i < s.length; i++) {
        if(s[i] !== ' ' && (i === 0 || s[i - 1] === ' ')) {
            res++;
        }
    }
    return res;
};

// 70
//
//
//
var findRestaurant = function(list1, list2) {
    list1 = list1.reduce((acc, item, index) => {
        acc[item] = index;
        return acc;
    }, {});

    let min = Infinity;
    let res = [];
    for (let i = 0; i < list2.length; i++) {
        const iter = list1[list2[i]] + i;
        if (list1[list2[i]] !== undefined && iter <= min) {
            if (iter < min) {
                res = [];
                min = iter;
            }
            res.push(list2[i]);
        }
    }

    return res;
};

// 71
//
//
//
var partitionLabels = function(S) {
    узнаем последние индексы
    const temp = {
        a: 8,
        c: 7
        b: 5
    };
    
    ab vvccvc
    
    const iters = [];
    iters.push ('a', 'b', 'c')
    check now <= all
    
    a b a b c b a c a
              5   7 8
    
    5 7 8
    
    d e  f  e  g  d  e
                  14 15
    
    hijhklij
};

// 72 Subtract the Product and Sum of Digits of an Integer
// https://leetcode.com/problems/subtract-the-product-and-sum-of-digits-of-an-integer
// 48 ms, faster than 93.40%
// 33.8 MB, less than 100.00%
var subtractProductAndSum = function(n) {
    let mult = 1;
    let sum = 0;

    while (n) {
        mult *= n % 10;
        sum += n % 10;
        n = parseInt(n / 10);
    }

    return mult - sum;
};

// 73 Minimum Time Visiting All Points
// https://leetcode.com/problems/minimum-time-visiting-all-points
// 52 ms, faster than 94.82%
// 35 MB, less than 100.00%
var minTimeToVisitAllPoints = function(points) {
    let res = 0;
    for (let i = 1; i < points.length; ++i) {
        res += Math.max(
            Math.abs(points[i][0] - points[i - 1][0]),
            Math.abs(points[i][1] - points[i - 1][1])
        );
    }
    return res;
};

// 74 Array Partition I
// https://leetcode.com/problems/array-partition-i/submissions
// 120 ms, faster than 48.89%
// 39 MB, less than 55.56%
var arrayPairSum = function(nums) {
    nums = nums.sort();
    let res = 0;
    for (let i = 0; i < nums.length; i += 2) {
        res += nums[i];
    }
    return res;
};

// 75 Minimum Absolute Difference
// https://leetcode.com/problems/minimum-absolute-difference
// 172 ms, faster than 70.37%
// 44.1 MB, less than 100.00%
var minimumAbsDifference = function(arr) {
    arr = arr.sort((a, b) => a - b);

    let min = Infinity;
    for (let i = 1; i < arr.length; i++) {
        const iter = arr[i] - arr[i - 1];
        if (iter < min) min = iter;
    }

    const res = [];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] - arr[i - 1] === min) {
            res.push([arr[i - 1], arr[i]]);
        }
    }

    return res;
};

// 76
//
//
//
