/* CHALLENGE

Deoxyribonucleic acid, DNA is the primary information storage molecule in biological systems. It is composed of four nucleic acid bases Guanine ('G'), Cytosine ('C'), Adenine ('A'), and Thymine ('T').

Ribonucleic acid, RNA, is the primary messenger molecule in cells. RNA differs slightly from DNA its chemical structure and contains no Thymine. In RNA Thymine is replaced by another nucleic acid Uracil ('U').

Create a function which translates a given DNA string into RNA.

*/

/* EXAMPLE

DNAtoRNA("TTTT") // "UUUU"
DNAtoRNA("GCAT") // "GCAU"
DNAtoRNA("GACCGCCGCC") // "GACCGCCGCC"

*/

// ANSWER

function DNAtoRNA(dna) {
    // create a function which returns an RNA sequence from the given DNA sequence
    return dna.split('').map(x => x === "T" ? "U" : x).join('')
}